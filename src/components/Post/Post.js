import React, { useState } from 'react';
import { MarkdownPreview } from 'react-marked-markdown'
import PreviewModal from '../PreviewModal/PreviewModal';
const Post = () => {
    const [post,setPost] =useState("")
    return (
        <div className="row">
        <div style={{height :'100vh'}} className="col-md-6">
            <div className="container">
              <h4>Customize your post : </h4>
              <h5>Sample post</h5>
              <textarea value={post} onChange={e => setPost(e.target.value)} style={{width : '90%', height : '90%'}} name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div style={{backgroundColor : '#e3e3e3' ,height :'100vh'}} className="col-md-6">
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-6">
                <h5>Preview</h5>
                <p>Mobile News Feed</p>
              </div>
              <div className="col-md-6">
                <PreviewModal post ={post}></PreviewModal>
              </div>
            </div>
            <div style={{backgroundColor : 'white' ,height :'50vh'}}  className="container">
              <p>Batingo11</p>
            <MarkdownPreview value={ post }/>
            <hr />
            <div className="row mt-3">
              <div className="col-md-4"> <button className="btn btn-secondary">Like</button> </div>
              <div className="col-md-4"> <button className="btn btn-secondary">Comment</button></div>
              <div className="col-md-4"> <button className="btn btn-secondary">Share</button></div>
            </div>
            </div>
         
          </div>
       
        </div>
      </div>
    );
};

export default Post;