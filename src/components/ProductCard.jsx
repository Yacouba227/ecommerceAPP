import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link><img src="images/wish.svg" alt="wishlist" /></Link>
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" alt="" className="img-fluid" />
          <img src="images/catbanner-02.jpg" alt="" className="img-fluid" />
        </div>
        <div className="product-detail">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones buik 10 pack multi colored for students
          </h5>
          {
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              value={4}
              edit={true}
              activeColor="#ffd700"
            />
          }
          <p className="price">250 FCFA</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column">
            <Link>
              <img src="images/prodcompare.svg" alt="addcard" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="addcard" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="addcard" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
