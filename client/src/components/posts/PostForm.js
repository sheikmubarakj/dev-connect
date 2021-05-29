import React, { useState } from 'react';
import { connect } from 'react-redux';
import {submitPost} from "../../actions/post";




const PostForm = ({submitPost}) => {

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    alert('clicked')
    submitPost({text});
  };

  return (
    <section className="container">
      <h1 className="large text-primary">
        Posts
      </h1>
      <p className="lead"><i className="fas fa-user"></i> Welcome to the community!</p>

      <div className="post-form">
        <div className="bg-primary p">
          <h3>Say Something...</h3>
        </div>
        <form className="form my-1" onSubmit={e => onSubmit(e)}>
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Create a post"
            required
            value={text}
            onChange={e => setText(e.target.value)}
          ></textarea>
          <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
      </div>

     
    </section>
  )
}


export default connect(null, {submitPost})(PostForm)
