import React, { Fragment, useEffect } from 'react';
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { Link } from "react-router-dom";
import {getPostById} from "../../actions/post";
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

const SinglePost = ({match, getPostById, post: {loading, post}}) => {

  useEffect(() => {
    getPostById(match.params.id);
  }, [match.params.id]);


  return (
    <Fragment>
      <Link to="/posts" className="btn">Back to posts</Link>
        {loading || post === null ? <Spinner /> : 
        <Fragment>
            <PostItem post={post} showActions={false} />
            <CommentForm postId={post._id} />
            <div className="comments">

             {post.comments.length > 0 && post.comments.map(comment => (
                        <CommentItem key={comment._id} comment={comment} postId={post._id} />
             ))}

            </div>
          
        </Fragment>
        }
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  post: state.post
})

export default connect(mapStateToProps, {getPostById})(SinglePost);
