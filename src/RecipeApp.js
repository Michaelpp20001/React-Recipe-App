import React from 'react';
import './RecipeApp.css';
import Navbar from './Navbar';
import RecipeList from './Recipe-list';

function RecipeApp() {
  return (
    <div className="App">
      <Navbar 
        title="Recipe App"
        nav={["New Recipe", "Home", "About", "Contact Us"]}
      />
      <RecipeList />
    </div>
  );
}

export default RecipeApp;
 