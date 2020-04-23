import React, {Component} from 'react';
import './Recipe-list.css';
import Recipe from './Recipe';

class RecipeList extends Component {
    render() {
        const {onDelete} = this.props;
        const recipes = this.props.recipeProps.map((recipe, index) =>(
            <Recipe key={recipe.id}
            title={recipe.title}
            ingredients={recipe.ingredients}
            img={recipe.img}
            instructions={recipe.instructions}
            id={recipe.id}
            onDelete={onDelete}
            />
        ))
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;