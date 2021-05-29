import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addEducation } from '../../actions/profile';
import { connect } from 'react-redux';

const AddEducation = ({addEducation, history}) => {

  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    current: false,
    to: "",
    description: ""
  })

  let { school,
    degree,
    fieldofstudy,
    from,
    current,
    to,
    description } = formData;

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log({formData});
    addEducation(formData, history);
  };

  return (
    <section className="container">
      <h1 className="large text-primary">
        Add Your Education
      </h1>
      <p className="lead">
        <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc that
        you have attended
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            required
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Field Of Study" onChange={(e) => onChange(e)} name="fieldofstudy" value={fieldofstudy} />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={(e) => onChange(e)} />
        </div>
        <div className="form-group">
          <p>
            <input type="checkbox" name="current" value={current} onChange={(e) => setFormData({...formData, current: !current})} /> Current School or Bootcamp
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input disabled={current ? "disabled" : ''} type="date" name="to" value={to} onChange={(e) => onChange(e)}/>
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        {/* <a className="btn btn-light my-1" href="dashboard">Go Back</a> */}
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
    </section>

  )
}


// const res = await axios.put("/api/profile/education")

// export default AddEducation;

export default connect(null, {addEducation})(AddEducation)




//Delete APi
// const res = await axios.delete(`/api/profile/experience/${id}`)
// const res = await axios.delete(`/api/profile/education/${id}`)