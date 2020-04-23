import React, {useState} from 'react';
import './RecipeApp.css';
import Navbar from './Navbar';
import RecipeList from './Recipe-list';

function RecipeApp() {
  const [recipes, setRecipes] = useState([ //useSTate on a functional component for this.state
    {
      id: 1,
      title: "Spaghetti",
      ingredients: ["8 Cups Water", "2 Tbsp Salt", "Spaghettit Pasta"],
      instructions: "Bring water to a boil with salt, then add pasta until al dente.",
      img: "https://starfinefoods.com/wp-content/uploads/food-3075854_1280-400x400.jpg"
  },
  {
      id: 2,
      title: "Green Smoothie",
      ingredients: ["1 Cup Water", "1 Cup Green Grapes", "1/2 Banana", "1/2 Cup Pineapple", "2 Cups Curly Kale"],
      instructions: "Using a high powered blender, place all ingredients into the blend. Slowly raise the speed to max and blend for 45 seconds. Pour and enjoy!",
      img: "https://delightfulmomfood.com/wp-content/uploads/2020/01/green-smoothie-recipe-400x400.jpg"
  },
  {
      id:3,
      title: "Dutch Baby Pancakes",
      ingredients: ["3 Eggs", "1/2 Cup Flour", "1/2 Cup Milk", "4 Tbsp Unsalted Butter"],
      instructions: "Combine and mix all ingredients except butter. Place butter in 10 skillet and melt. Pour batter into skillet and cook for 1 minute. Place skillet in 425 degree oven and bake for 20 minutes. Lower oven to 300 defrees and bake another 10 minutes. Remove pancake and enjoy!",
      img: "https://hips.hearstapps.com/del.h-cdn.co/assets/cm/15/11/54fdf3228cd33-dutch-baby-pancake-recipe-mslo1210-xl.jpg"
  }]);
  const [nextRecipeId, seNextRecipeId] = useState(3);

  return (
    <div className="App">
      <Navbar 
        title="Recipe App"
        nav={["New Recipe", "Home", "About", "Contact Us"]}
      />
      <RecipeList 
      arrRecipes={recipes}/>
    </div>
  );
}

export default RecipeApp;
 