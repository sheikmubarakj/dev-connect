import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import {connect} from "react-redux";
import { login } from "../../actions/auth";




const Login = ({login, isAuthenticated}) => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  // console.log('isAuthenticated', isAuthenticated);

  const {email, password} = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };
  
  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  if(isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Fragment>
      {/* if (isAuthenticated) {
         <Redirect to="/dashboard" />
      } */}
      <section className="container">
        {/* <div className="alert alert-danger">
          Invalid credentials
      </div> */}
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
        <form className="form" onSubmit={(e) => onSubmit(e)} >
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => onChange(e)}
              value={password}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="signup">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

// const mapStateToProps = state => {
//   console.log(state);
//   return {isAuthenticated: state.auth.isAuthenticated}
// )

// const mapStateToProps = state =>  {
//   console.log("sadfjasgdfs",state)
// }

export default connect(mapStateToProps, {login})(Login)