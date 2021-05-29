import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import CreateProfile from "./components/profile-form/CreateProfile";
import AddExperience from "./components/profile-form/AddExperience";
import AddEducation from "./components/profile-form/AddEducation";
import EditProfile from "./components/profile-form/EditProfile";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Alert from './components/layout/Alert';
import Post from "./components/posts/Post";
import SinglePost from "./components/post/SinglePost";
import PrivateRoute from "./components/routing/PrivateRoute";

import { loadUser } from "./actions/auth";

import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import store from "./store/store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  console.log('store', store);
  useEffect(() => {
    if (localStorage.token) {
      store.dispatch(loadUser());
    }
  });

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />

          <section className="container">
            <Alert />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profiles" component={Profiles} />

            <PrivateRoute path="/dashboard" component={Dashboard}/>
            {/* <Route path="/dashboard" component={Dashboard} /> */}
            <PrivateRoute path="/add-experience" component={AddExperience} />
            <PrivateRoute path="/add-education" component={AddEducation} />
            <PrivateRoute path="/add-profile" component={CreateProfile} />
            <PrivateRoute path="/edit-profile" component={EditProfile} />
            <PrivateRoute path="/profile/:id" component={Profile} />
            <PrivateRoute path="/posts" component={Post} />
            <PrivateRoute path="/post/:id" component={SinglePost} />
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
