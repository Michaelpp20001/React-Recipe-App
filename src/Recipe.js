import React, {Component} from 'react';
import './Recipe.css';

class Recipe extends Component {
    static defaultProps = {
        ingredients: []
    }
    render() {
        //passing props from RecipeApp.js
        const {title, img, instructions, id, onDelete} = this.props;
        //array of props, using map to create an element for each index of ing JSX
        //const ingredients = this.props.ingredients.map((ing, index) => (
        //must always have a unique key when mapping
        //<li key={index}>{ing}</li>
        //));
        return (
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title}/>
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">{title}</h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        {this.props.ingredients.map((ing, index) => (
                            <li key={index}>{ing}</li>
                        ))}
                    </ul>
                    <h4>Instructions:</h4>
                    <p>{instructions}</p>
                    <button type="button" onClick={() => onDelete(id)}>DELETE</button>
                </div>  
            </div>
        );
    }
}

export default Recipe;