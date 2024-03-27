import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton"; // Import FavoriteButton component
const Meals = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setError(null); // Clear previous errors

      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        setMeals(response.data.meals);
      } catch (error) {
        setError(error); // Update error state
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, [category]);

  return (
    <div className="container-fluid">
      <h2>{category} Meals</h2>
      {isLoading && <p>Loading meals...</p>}
      {error && <p>Error fetching meals: {error.message}</p>}
      {meals.length > 0 && (
        <div className="row">
          <div className="col-lg-12 col-12 col-md-12">
            {meals.map((meal) => (
              <div key={meal.idMeal} className="M">
                <Link to={`/meal/${meal.idMeal}`}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </Link>
                <p className="fs-3"> {meal.strMeal}</p>
                <FavoriteButton mealId={meal.idMeal} />
              </div>
            ))}
          </div>
        </div>
      )}
      {meals.length === 0 && !isLoading && !error && (
        <p>No meals found in this category.</p>
      )}
    </div>
  );
};

export default Meals;
