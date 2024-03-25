import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton'; // Import FavoriteButton component

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
    <div>
      <h2>{category} Meals</h2>
      {isLoading && <p>Loading meals...</p>}
      {error && <p>Error fetching meals: {error.message}</p>}
      {meals.length > 0 && (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              <Link to={`/meal/${meal.idMeal}`}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                {meal.strMeal}
              </Link>
              <FavoriteButton mealId={meal.idMeal} /> {/* Add Favorite Button */}
            </li>
          ))}
        </ul>
      )}
      {meals.length === 0 && !isLoading && !error && <p>No meals found in this category.</p>}
    </div>
  );
};

export default Meals;
