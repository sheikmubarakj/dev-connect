import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import {connect} from 'react-redux';
import axios from 'axios';

const Signup = ({setAlert}) => {

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    password2: '',
    email: ''
  })

  const {name, password, password2, email} = formData;
  
  const onSubmit = (e) => {
    e.preventDefault();
 /*
 {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA5Y2NmNDA0MzRkMmUwMTQ5NzM5ZWFiIn0sImlhdCI6MTYyMDg4OTQwOSwiZXhwIjoxNjIxMjQ5NDA5fQ.cQgBVw4wXL9Sj7p6iW-gkLPcAs4z8C9cf_tOgfrMYKg"
}
 */
    if (password !== password2) {
      return setAlert("Password Mismatched.", 'danger')
    }

    const config = {
      headers: {
        'content-type': 'application/json'
      }
    };
    // const body = JSON.stringify({name, email, password2, password});
    const body = {name, email, password2, password};

    axios.post('/api/users', body, config).then((result) => {
      // console.log(result);
    }).catch((error, msg) => {
      // let payload = {
      //   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA5Y2NmNDA0MzRkMmUwMTQ5NzM5ZWFiIn0sImlhdCI6MTYyMDg4OTQwOSwiZXhwIjoxNjIxMjQ5NDA5fQ.cQgBVw4wXL9Sj7p6iW-gkLPcAs4z8C9cf_tOgfrMYKg"
      // };

      if (error && error.response && error.response.data && error.response.data.errors) {
        error.response.data.errors.forEach((error) => {
          setAlert(error.msg, "danger");
        });
      }
    });
  };

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // if(isAuthenticated) {
  //   return <Redirect to="/dashboard" />
  // }

  return (
    <Fragment>
   
    <h1 className="large text-primary">Sign Up</h1>
    <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
    <form className="form" onSubmit={e => onSubmit(e)}>
      <div className="form-group">
        <input type="text" placeholder="Name" name="name" value={name} onChange={ e => onChange(e)} required />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Email Address" name="email" value={email} onChange={ e => onChange(e)} required  />
        <small className="form-text"
          >This site uses Gravatar so if you want a profile image, use a
          Gravatar email</small
        >
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          name="password"
          minLength="6"
          value={password}
          onChange={ e => onChange(e)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          minLength="6"
          value={password2}
          onChange={ e => onChange(e)}
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Register" />
    </form>
    <p className="my-1">
      Already have an account? <Link to="/login">Sign In</Link>
    </p>

  </Fragment>
  )
}


export default connect(null, {setAlert})(Signup)
