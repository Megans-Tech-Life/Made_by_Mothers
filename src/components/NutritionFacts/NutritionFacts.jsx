import "./NutritionFacts.css";

function NutritionFacts({ data, onClose }) {
  if (!data) {
    return null;
  }

  return (
    <div className="nutrition-factsModal">
      <h2>Nutrition Facts</h2>
      <button onClick={onClose}>Close</button>
      <p>Calories: {data.calories}</p>
      <p>Protein: {data.protein}</p>
      <p>Fat: {data.fat}</p>
      <p>Carbohydrates: {data.carbohydrates}</p>
    </div>
  );
}
export default NutritionFacts;
