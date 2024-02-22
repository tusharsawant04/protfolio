import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogPost = ({ id, title, content }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div>
      <div className="card m-5 text-dark">
        <div className="card-header">
          <h3>{title}</h3>
        </div>
        <div className="card-body text-bg-secondary">
          <p>{content.substring(0, 100)}...</p>
          <a href={`/blog/${id}`} className='btn btn-light'>Read more...</a>

        </div>
      </div>
      <hr />
    </div>
  );
};

export default BlogPost;
