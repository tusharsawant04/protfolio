// src/components/BlogList.js
import React from 'react';
import BlogPost from '../component/Blogpost';
import blogData from '../component/blogData';

const BlogList = () => {
  return (
    <div>
      <h2>Just Read Somthing</h2>
      {blogData.map((post) => (
         <div key={post.id}>
         <BlogPost id={post.id} title={post.title} content={post.content} />

       </div>
      ))}

      </div>
    
  );
};

export default BlogList;
