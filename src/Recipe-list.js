import React, {Component} from 'react';
import './Recipe-list.css';
import Recipe from './Recipe';

class RecipeList extends Component {
    //static defaultProps = {
    //     recipes: [{
    //         title: "Spaghetti",
    //         ingredients: ["8 Cups Water", "2 Tbsp Salt", "Spaghettit Pasta"],
    //         instructions: "Bring water to a boil with salt, then add pasta until al dente.",
    //         img: "https://starfinefoods.com/wp-content/uploads/food-3075854_1280-400x400.jpg"
    //     },
    //     {
    //         title: "Green Smoothie",
    //         ingredients: ["1 Cup Water", "1 Cup Green Grapes", "1/2 Banana", "1/2 Cup Pineapple", "2 Cups Curly Kale"],
    //         instructions: "Using a high powered blender, place all ingredients into the blend. Slowly raise the speed to max and blend for 45 seconds. Pour and enjoy!",
    //         img: "https://delightfulmomfood.com/wp-content/uploads/2020/01/green-smoothie-recipe-400x400.jpg"
    //     },
    //     {
    //         title: "Dutch Baby Pancakes",
    //         ingredients: ["3 Eggs", "1/2 Cup Flour", "1/2 Cup Milk", "4 Tbsp Unsalted Butter"],
    //         instructions: "Combine and mix all ingredients except butter. Place butter in 10 skillet and melt. Pour batter into skillet and cook for 1 minute. Place skillet in 425 degree oven and bake for 20 minutes. Lower oven to 300 defrees and bake another 10 minutes. Remove pancake and enjoy!",
    //         img: "https://hips.hearstapps.com/del.h-cdn.co/assets/cm/15/11/54fdf3228cd33-dutch-baby-pancake-recipe-mslo1210-xl.jpg"
    //     }]
    // }
    render() {
        const arrRecipes = this.props.arrRecipes.map((recipe, index) =>(
            <Recipe key={index} 
            title={recipe.title}
            ingredients={recipe.ingredients}
            img={recipe.img}
            instructions={recipe.instructions}
            />
        ))
        return (
            <div className="recipe-list">
                {arrRecipes}
            </div>
        );
    }
}

export default RecipeList;