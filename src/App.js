// import "./App.css";
// import "../src/assets/css/bootstrap.min.css";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import HomePage from "./Pages/HomePage";
// import Menu from "./Pages/Menu";
// import MealsPage from "./Pages/MealsPage";

// let router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/Menu",
//     element: <Menu />,
//   },
//   {
//     path: "/Meals",
//     element: <MealsPage />,
//   },
// ]);
// function App() {
//   return (
//     <>
//       <div className="App">
//         <RouterProvider router={router} />
//       </div>
//     </>
//   );
// }

// export default App;
import "./App.css";
import "../src/assets/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/Navbar';
import Menu from "./component/Menu";
import Meals from "./component/Meals";
import About from "./component/About";
import FavoriteMeals from "./component/FavoriteMeals";
import RandomMealGenerator from "./component/RandomMealGenerato";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/meals/:category" element={<Meals />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<FavoriteMeals />} />
          <Route path="/generator" element={<RandomMealGenerator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
