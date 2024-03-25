import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomMealGenerator = () => {
  const [randomMeal, setRandomMeal] = useState(null);

  const generateRandomMeal = async () => {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    setRandomMeal(response.data.meals[0]);
  };

  useEffect(() => {
    generateRandomMeal();
  }, []);

  return (
    <div>
      <h2>Random Meal Generator</h2>
      {randomMeal ? (
        <div>
          <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
          <h3>{randomMeal.strMeal}</h3>
          {/* Add buttons or functionality to handle favoriting the random meal */}
        </div>
      ) : (
        <p>Generating a random meal...</p>
      )}
      <button onClick={generateRandomMeal}>Generate Another Random Meal</button>
    </div>
  );
};

export default RandomMealGenerator;
