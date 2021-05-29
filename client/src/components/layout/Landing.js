import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {

  return (
    <Fragment>
      <nav className="navbar bg-dark">
        <h1>
          <a href="index.html"><i className="fas fa-code"></i> DevConnector</a>
        </h1>
        <ul>
          <li>
          <Link to="/profiles">Developers</Link>
          </li>
          <li><Link to="/signup">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          
        </ul>
      </nav>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help from
              other developers
          </p>
            <div className="buttons">
              <a href="/signup" className="btn btn-primary">Sign Up</a>
              {/* <a href="login" className="btn btn-light">Login</a> */}
              <Link to="/login" className="btn btn-light">Login</Link>
            </div>
          </div>
        </div>
      </section>

    </Fragment>
  )
}

export default Landing;

//useContext -> send data from parent to nth child
//useRef ->
//Basic, es6, redux, hooks, class and diff
//useState, useEffect,
//componet life cycle
//redux
//context - without redux
//jsx