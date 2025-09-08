import "./Home.css";
import FoodCard from "../../components/FoodCard/FoodCard";

function Home({ recipes, allRecipes, onLoadMore }) {
  return (
    <section className="home">
      <div className="home__heading">
        <h2 className="home__title">Homemade Baby Food</h2>
        <p className="home__subtitle">
          Discover wholesome, easy-to-make recipes crafted by mothers for
          growing babies. Each recipe includes complete nutrition analysis to
          help you make informed choices.{" "}
        </p>
      </div>

      <div className="food-card-container">
        {/* FoodCard components will be rendered here */}
        {recipes.map((recipe, index) => (
          <FoodCard key={index} {...recipe} />
        ))}
      </div>

      {recipes.length < allRecipes.length && (
        <button className="load-more-btn" onClick={onLoadMore}>
          Load More
        </button>
      )}
    </section>
  );
}

export default Home;
