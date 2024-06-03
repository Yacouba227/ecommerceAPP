import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">5 jan 22</p>
          <h5 className="title">A beautiful sunday morning</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            ut quia, fuga mollitia
          </p>
          <Link to="/" className="button">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
