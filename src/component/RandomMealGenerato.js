import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomMealGenerator = ({ addToFavorites }) => {
  const [randomMeal, setRandomMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomMeal = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        setRandomMeal(response.data.meals[0]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRandomMeal();
  }, []);

  const handleFavorite = () => {
    if (randomMeal) {
      addToFavorites(randomMeal);
    }
  };

  return (
    <div className="container-fluid ">
      <h1>Random Meal Generator</h1>
      {isLoading ? (
        <p>Generating a random meal...</p>
      ) : error ? (
        <p>Error fetching random meal: {error.message}</p>
      ) : randomMeal ? (
        <div className="row">
          <div className="col-lg-12 col-12 col-md-12">
            <img
              src={randomMeal.strMealThumb}
              alt={randomMeal.strMeal}
              width="100%"
              height="450px"
            />
            <h2>{randomMeal.strMeal}</h2>
            <p>{randomMeal.strInstructions}</p>
            <button
              className="border-0 rounded-pill bg-primary text-white px-4 py-2"
              onClick={handleFavorite}
            >
              Add to Favorites
            </button>
          </div>
        </div>
      ) : (
        <p>No random meal found.</p>
      )}
    </div>
  );
};

export default RandomMealGenerator;
