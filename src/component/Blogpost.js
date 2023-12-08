// src/components/BlogPost.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({id, title, content }) => {
  return (
    <div>
      <div className="card m-5 text-dark">
        <div className="card-header">
      <h3>{title}</h3>
      </div>

      <div className="card-body text-bg-secondary">
          <p>{content.substring(0, 100)}...</p>
          <Link to={`/blog/${id}`} className='btn btn-light'>
            Read more...
          </Link>
          </div>
      </div>
      <hr />
    </div>
  );
};

export default BlogPost;
