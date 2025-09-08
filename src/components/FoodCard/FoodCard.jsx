import React, { useState } from "react";
import "./FoodCard.css";

const FoodCard = ({ image, name, ingredients }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleViewNutrition = () => {
    // Hook to Edamam API for nutrition data
  };

  return (
    <div className="food-card">
      <img className="food-card__image" src={image} alt={name} />
      <h2 className="food-card__name">{name}</h2>

      <ul className="food-card__ingredients">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="food-card__actions">
        <button
          className={`like-button ${liked ? "liked" : ""}`}
          onClick={toggleLike}
          aria-pressed={liked}
        >
          {liked ? "Liked" : "Like"}
        </button>

        <button className="nutrition-button" onClick={handleViewNutrition}>
          View Nutrition{/* Hook to Edamam API for nutrition data */}
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
