import React, { useState } from "react";
import "./FoodCard.css";
import { FaHeart } from "react-icons/fa";
import Sparkle from "../../images/sparkle.png";
import { fetchNutritionData } from "../../utils/api";
import NutritionModal from "../NutritionModal/NutritionModal";

const FoodCard = ({
  image,
  title,
  mealType,
  ingredients,
  onAddFavorite,
  onRemoveFavorite,
  favorites,
}) => {
  const [nutritionData, setNutritionData] = useState(null);
  const [nutritionLoading, setNutritionLoading] = useState(false);
  const [nutritionError, setNutritionError] = useState("");

  const isLiked = favorites?.some((fav) => fav.title === title);

  const toggleLike = () => {
    if (!isLiked) {
      onAddFavorite({ image, title, mealType, ingredients });
    } else {
      onRemoveFavorite(title);
    }
  };

  const handleViewNutrition = async () => {
    setNutritionLoading(true);
    setNutritionError("");
    setNutritionData(null);
    try {
      const query = ingredients.join(", ");
      const data = await fetchNutritionData(query);
      if (data && data.foods && data.foods.length > 0) {
        const food = data.foods[0];
        setNutritionData({
          calories: food.nf_calories,
          protein_g: food.nf_protein,
          carbs_g: food.nf_total_carbohydrate,
          fat_g: food.nf_total_fat,
          serving_size: food.serving_qty + " " + food.serving_unit,
        });
      } else {
        setNutritionError("No nutrition data found for this recipe.");
      }
    } catch (error) {
      console.error(error);
      setNutritionError("Failed to fetch nutrition info. Try again later.");
      setNutritionData(null);
    } finally {
      setNutritionLoading(false);
    }
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
          View Nutrition
        </button>
        <button
          className={`like-button ${isLiked ? "liked" : ""}`}
          onClick={toggleLike}
          aria-pressed={isLiked}
        >
          <FaHeart />
        </button>
      </div>

      <NutritionModal
        isOpen={nutritionLoading || !!nutritionData || !!nutritionError}
        onClose={() => {
          setNutritionData(null);
          setNutritionError("");
          setNutritionLoading(false);
        }}
        nutritionData={nutritionData}
        loading={nutritionLoading}
        error={nutritionError}
      />
    </div>
  );
};

export default FoodCard;
