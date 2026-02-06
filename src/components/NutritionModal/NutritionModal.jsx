import React from "react";
import "./NutritionModal.css";
import Sparkle from "../../images/sparkle.png";

const NutritionModal = ({ isOpen, onClose, nutritionData, loading, error }) => {
  if (!isOpen) return null;

  return (
    <div className="nutrition-modal">
      <div className="nutrition-modal__content">
        <button className="nutrition-modal__close" onClick={onClose}>
          &times;
        </button>
        <h2 className="nutrition-modal__title">Nutrition Information</h2>

        {loading && <p>Loading nutrition data...</p>}
        {error && !loading && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && nutritionData ? (
          <ul className="nutrition-modal__list">
            <li>
              <img
                className="nutrition-modal__sparkle"
                src={Sparkle}
                alt="Sparkle"
              />
              <strong>Calories:</strong> {nutritionData.calories ?? "N/A"} cal
            </li>
            <li>
              <img
                className="nutrition-modal__sparkle"
                src={Sparkle}
                alt="Sparkle"
              />
              <strong>Protein:</strong> {nutritionData.protein_g ?? "N/A"} g
            </li>
            <li>
              <img
                className="nutrition-modal__sparkle"
                src={Sparkle}
                alt="Sparkle"
              />
              <strong>Carbohydrates:</strong> {nutritionData.carbs_g ?? "N/A"} g
            </li>
            <li>
              <img
                className="nutrition-modal__sparkle"
                src={Sparkle}
                alt="Sparkle"
              />
              <strong>Fat:</strong> {nutritionData.fat_g ?? "N/A"} g
            </li>
          </ul>
        ) : null}
        {!loading && !error && !nutritionData && (
          <div style={{ color: "#888", marginTop: "1em" }}>
            <p className="nutrition-modal__NA">
              No Nutrition data available for this recipe.
            </p>
            <p className="nutrition-modal__error-msg">
              Try editing the recipe ingredients or check your network
              connection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NutritionModal;
