
import React, { Fragment, useEffect } from 'react'
import { connect } from "react-redux";
import PostForm from "./PostForm";
import Spinner from "../layout/Spinner";
import { getPost } from "../../actions/post";

import PostItem from "./PostItem";

const Post = ({post: {loading, posts}, getPost}) => {


  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div>
       {loading ? <Spinner /> : 
       <Fragment>
    <h1 class="large text-primary">
        Posts
      </h1>
      <p class="lead"><i class="fas fa-user"></i> Welcome to the community!</p>

      <PostForm />

      <div class="posts">
            {posts.length > 0 && posts.map(post => (
                <div>
                  {/* {console.log('posts', post)} */}
                  <PostItem key={post._id} post={post} /> 
                  </div>
                // <span>{post._id}</span>
            ))}
      </div>
        </Fragment>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, {getPost})(Post);