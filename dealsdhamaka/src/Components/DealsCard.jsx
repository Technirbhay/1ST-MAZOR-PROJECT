import React from "react";
import "./DealCard.css";

const DealCard = ({ deal }) => {
  return (
    <div className="deal-card">
      <img
        src={deal.image}
        alt={deal.title}
        className="deal-image"
      />

      <h4 className="deal-title">{deal.title}</h4>

      <p className="deal-price">
        ₹{deal.price}
        <span className="deal-original-price">
          ₹{deal.originalPrice}
        </span>
      </p>

      <a
        href={deal.affiliateLink}
        target="_blank"
        rel="noreferrer"
      >
        <button className="deal-btn">Get Deal</button>
      </a>
    </div>
  );
};

export default DealCard;
