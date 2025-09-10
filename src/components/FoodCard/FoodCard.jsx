import React, { useState } from "react";
import "./FoodCard.css";
import { FaHeart } from "react-icons/fa";
import Sparkle from "../../images/sparkle.png";

const FoodCard = ({ image, title, mealType, ingredients }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const [nutritionData, setNutritionData] = useState(null);

  const handleViewNutrition = () => {
    // Hook to Edamam API for nutrition data
  };

  return (
    <div className="food-card">
      <img className="food-card__image" src={image} alt={title} />
      <h2 className="food-card__title">{title}</h2>
      <p className="food-card__mealType">{mealType}</p>
      <ul className="food-card__ingredients">
        {ingredients.map((item, index) => (
          <li key={index}>
            <img className="food-card__sparkle" src={Sparkle} alt="Sparkle" />
            {item}
          </li>
        ))}
      </ul>

      <div className="food-card__actions">
        <button className="nutrition-button" onClick={handleViewNutrition}>
          View Nutrition{/* Hook to Edamam API for nutrition data */}
        </button>
        <button
          className={`like-button ${liked ? "liked" : ""}`}
          onClick={toggleLike}
          aria-pressed={liked}
        >
          <FaHeart />
        </button>
        {nutritionData && (
          <div className="nutrition-info">
            {/* Display nutrition data here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
