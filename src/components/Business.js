import React from "react";
import "./Business.css";

const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90
};

const Business = () => {
  const {
    name,
    address,
    city,
    state,
    zipcode,
    category,
    rating,
    reviewCount
  } = business;

  return (
    <div className="Business">
      <div className="image-container">
        <img
          src="https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg"
          alt=""
        />
      </div>
      <h2>{name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{address}</p>
          <p>{city}</p>
          <p>
            {state} {zipcode}
          </p>
        </div>
        <div className="Business-reviews">
          <h3>{category}</h3>
          <h3 className="rating">{rating}</h3>
          <p>{reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
