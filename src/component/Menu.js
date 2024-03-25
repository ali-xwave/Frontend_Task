import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setCategories(response.data.categories);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Meal Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.idCategory}>
            <Link to={`/meals/${category.strCategory}`}>{category.strCategory}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
