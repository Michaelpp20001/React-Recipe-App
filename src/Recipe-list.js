import React, {Component} from 'react';
import './Recipe-list.css';
import Recipe from './Recipe';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [{
            title: "Spaghetti",
            ingredients: ["8 Cups Water", "2 Tbs Salt", "Spaghettit Pasta"],
            instructions: "Bring water to a boil with salt, then add pasta until al dente",
            img: "https://starfinefoods.com/wp-content/uploads/food-3075854_1280-400x400.jpg"
        },
        {
            title: "Green Smoothie",
            ingredients: ["1 Cup Water", "1 Cup Green Grapes", "1/2 Banana", "1/2 Cup Pineapple", "2 Cups Curly Kale"],
            instructions: "Using a high powered blender, place all ingredients into the blend. Slowly rase the speed to max and blend for 45 seconds. Pour and enjoy!",
            img: "https://delightfulmomfood.com/wp-content/uploads/2020/01/green-smoothie-recipe-400x400.jpg"
        }]
    }
    render() {
        return (
            <div className="recipe-list">
                {this.props.recipes.map((recipe, index) => (
                    <Recipe key={index} 
                    title={recipe.title}
                    ingrdients={recipe.ingredients}
                    img={recipe.img}
                    instructions={recipe.instructions}
                    />
                ))}
            </div>
        );
    }
}

export default RecipeList;