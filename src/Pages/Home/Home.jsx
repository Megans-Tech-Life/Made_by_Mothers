import React from "react";
import "./Home.css";
import FoodCard from "../../components/FoodCard/FoodCard";
import BannerTop from "../../images/Banner-top.png";

function Home({
  recipes,
  allRecipes,
  onLoadMore,
  onAddFavorite,
  onRemoveFavorite,
  favorites,
}) {
  return (
    <section className="home">
      <div
        className="home__heading"
        style={{ backgroundImage: `url(${BannerTop})` }}
      >
        <h2 className="home__title">Homemade Baby Food</h2>
        <p className="home__subtitle">
          Discover wholesome, easy-to-make recipes crafted by mothers for
          growing babies. Each recipe includes complete nutrition analysis to
          help you make informed choices. Because every spoonful should be
          filled with love, care, and the support of a community that
          understands your journey.{" "}
        </p>
      </div>

      <div className="food-card-container">
        {recipes.map((recipe, index) => (
          <FoodCard
            key={index}
            {...recipe}
            favorites={favorites}
            onAddFavorite={onAddFavorite}
            onRemoveFavorite={onRemoveFavorite}
          />
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
