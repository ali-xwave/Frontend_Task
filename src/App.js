import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/Navbar';
import Home from './component/Home';
import Menu from './component/Menu';
import Meals from './component/Meals';
import About from './component/About';
import FavoriteMeals from './component/FavoriteMeals';
import RandomMealGenerator from './component/RandomMealGenerato';
import './App.css'

const App = () => {
  const [favorites, setFavorites] = useState([]); // State to store user's favorite meals

  useEffect(() => {
    // Retrieve favorites from local storage on app load
    const storedFavorites = localStorage.getItem('mealTimeFavorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addToFavorites = (meal) => {
    setFavorites([...favorites, meal]);
    localStorage.setItem('mealTimeFavorites', JSON.stringify([...favorites, meal]));
  };

  const removeFromFavorites = (mealId) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== mealId);
    setFavorites(updatedFavorites);
    localStorage.setItem('mealTimeFavorites', JSON.stringify(updatedFavorites));
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home addToFavorites={addToFavorites} favorites={favorites} />}
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/meals/:category" element={<Meals addToFavorites={addToFavorites} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/favorites"
            element={<FavoriteMeals favorites={favorites} removeFromFavorites={removeFromFavorites} />}
          />
          <Route path="/generator" element={<RandomMealGenerator addToFavorites={addToFavorites} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
