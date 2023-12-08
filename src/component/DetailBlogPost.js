// src/components/DetailedBlogPost.js
import React, { useState, useEffect } from 'react';
import { fetchBlogPostById } from '../utils/api';

import { useParams } from 'react-router-dom';

const DetailBlogPost = ({ }) => {
    const { postId } = useParams(); 
  const [blogPost, setBlogPost] = useState(null);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBlogPostById(postId);
        setBlogPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchData();
  }, [postId]);

  if (!blogPost) {
    return <div className="text-primary flex display-1 text-center">Loading...</div>;
  }

  return (
    <div>
      {blogPost.title ? (
        <>
          <h2>{blogPost.title}</h2>
          <p>{blogPost.content}</p>
        </>
      ) : (
        <div>No data available for this blog post.</div>
      )}
    </div>
  );
};

export default DetailBlogPost;
