import React, {useState} from 'react';
import './RecipeApp.css';
import Navbar from './Navbar';
import RecipeList from './Recipe-list';
import RecipeInput from './Recipe-Input';

function RecipeApp() {
  const [recipes, setRecipes] = useState([ //useSTate on a functional component for this.state
    {
      id: 0,
      title: "Spaghetti",
      ingredients: ["8 Cups Water", "2 Tbsp Salt", "Spaghettit Pasta"],
      instructions: "Bring water to a boil with salt, then add pasta until al dente.",
      img: "https://starfinefoods.com/wp-content/uploads/food-3075854_1280-400x400.jpg"
  },
  {
      id: 1,
      title: "Green Smoothie",
      ingredients: ["1 Cup Water", "1 Cup Green Grapes", "1/2 Banana", "1/2 Cup Pineapple", "2 Cups Curly Kale"],
      instructions: "Using a high powered blender, place all ingredients into the blend. Slowly raise the speed to max and blend for 45 seconds. Pour and enjoy!",
      img: "https://delightfulmomfood.com/wp-content/uploads/2020/01/green-smoothie-recipe-400x400.jpg"
  },
  {
      id:2,
      title: "Dutch Baby Pancakes",
      ingredients: ["3 Eggs", "1/2 Cup Flour", "1/2 Cup Milk", "4 Tbsp Unsalted Butter"],
      instructions: "Combine and mix all ingredients except butter. Place butter in 10 skillet and melt. Pour batter into skillet and cook for 1 minute. Place skillet in 425 degree oven and bake for 20 minutes. Lower oven to 300 defrees and bake another 10 minutes. Remove pancake and enjoy!",
      img: "https://hips.hearstapps.com/del.h-cdn.co/assets/cm/15/11/54fdf3228cd33-dutch-baby-pancake-recipe-mslo1210-xl.jpg"
  }]);
  const [nextRecipeId, setNextRecipeId] = useState(3);
  const [showForm, setShowForm] = useState(false);


  function handleSave(recipe) {  // parameter is an object that represents a single recipe
    const newRecipe = {...recipe, id: nextRecipeId};
    const newArr = [...recipes, newRecipe]
    setRecipes(newArr);
    setNextRecipeId(nextRecipeId + 1);
    setShowForm(false);
  }

  function onDelete(id) {
    console.log(id);
    const filterRecipes = [...recipes].filter(recipe => recipe.id !== id); // returns all the recipes not equql to the current id
    console.log(filterRecipes);
    setRecipes(filterRecipes);
  }

  return ( 
    <div className="App">
      <Navbar 
        title="Recipe App"
        onNewRecipe={() => setShowForm(true)}
      />
      { showForm ? 
        <RecipeInput 
          onSave={handleSave}
          onClose={() => setShowForm(false)}
          /> : null }
      <RecipeList
      onDelete={onDelete}
      recipeProps={recipes}/>
    </div>
  );
}

export default RecipeApp;
 