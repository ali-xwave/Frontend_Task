import React, { useState, useEffect } from 'react';

const FavoriteMeals = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites') || '[]';
    setFavorites(JSON.parse(storedFavorites));
  }, []);

  const removeFavorite = (mealId) => {
    const updatedFavorites = favorites.filter((id) => id !== mealId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2>My Favorite Meals</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((mealId) => (
            <li key={mealId}>
              {/* Replace with actual meal details retrieval logic */}
              <p>Meal Name (replace with actual name based on mealId)</p>
              <button onClick={() => removeFavorite(mealId)}>Remove from Favorites</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You don't have any favorite meals yet!</p>
      )}
    </div>
  );
};

export default FavoriteMeals;
