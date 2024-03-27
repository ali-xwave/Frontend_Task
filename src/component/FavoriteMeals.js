import React from "react";

const FavoriteMeals = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="container-fluid">
      <h1>My Favorite Meals</h1>
      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet!</p>
      ) : (
        <div className="row">
          <div className="col-lg-12 col-12 col-md-12">
            {favorites.map((meal) => (
              <p key={meal.idMeal} className="F">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
                <button
                  onClick={() => removeFromFavorites(meal.idMeal)}
                  className="border-0 rounded-pill bg-primary text-white px-4 py-2"
                >
                  Remove from Favorites
                </button>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoriteMeals;
