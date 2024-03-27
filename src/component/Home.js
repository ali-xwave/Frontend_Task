import React from "react";
import { Link } from "react-router-dom";

const Home = ({ addToFavorites, favorites }) => {
  return (
    <div className="bg position-relative">
      <div className="position-absolute start-50 top-50 translate-middle text-center text-white">
        <h1>Welcome to MealTime!</h1>
        <p>
          Explore delicious recipes through our categories or generate random
          meal suggestions.
        </p>
        <div className="actions ">
          <Link to="/menu">Explore Menu</Link>
          <Link to="/favorites" className="px-2">
            View Favorites ({favorites.length})
          </Link>
          <Link to="/generator">Generate Random Meal</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
