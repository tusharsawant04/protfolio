// src/components/DetailedBlogPost.js
import React, { useState, useEffect } from 'react';
import { fetchBlogPostById } from '../utils/api';
import blogData from '../component/blogData';
import { useParams } from 'react-router-dom';
import BlogPost from '../component/Blogpost';
const DetailBlogPost = ({ }) => {
    const { id } = useParams(); 
    const [blogPost, setBlogPost] = useState(null);
    console.log("post id"+id);
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-8'>
          {blogData.filter(post => post.id == id).map(post => (
              <div key={post.id}>
                <header className="mb-4">
                  <h1 className='fw-bolder mb-1'>{post.title}</h1> 
                   </header>
                 <p className='fs-5 mb-4'>
                 {post.content} 
                 </p>
                 
              </div>
          ))}
          </div>
          </div>
      </div>
  );
};

export default DetailBlogPost;
