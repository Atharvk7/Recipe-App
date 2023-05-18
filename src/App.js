import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home';
import ShowRecipes from './Recipes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<ShowRecipes />} />
      </Routes>
    </Router>
  );
};

export default App;
