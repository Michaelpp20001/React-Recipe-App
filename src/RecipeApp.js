import React from 'react';
import logo from './logo.svg';
import './RecipeApp.css';
import Recipe from './Recipe';
import Navbar from './Navbar';

function RecipeApp() {
  return (
    <div className="App">
      <Navbar 
        title="Recipe App"
        nav={["New Recipe", "Home", "About", "Contact Us"]}
      />
      <Recipe 
        title="pasta" 
        ingredients={["flour", "water"]}
        instructions="Mix ingredients"
        img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg?crop=1xw:0.7498500299940012xh;center,top&resize=1200:*"
        />
    </div>
  );
}

export default RecipeApp;
 