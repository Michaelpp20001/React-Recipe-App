import React, {Component} from 'react';
import "./Recipe-Input.css";

class RecipeInput extends Component {
    static defaultProps = {
        onClose() {},
        onSave() {},
    }
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            instructions: "",
            ingredients: [""],
            img: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleChangeIng = this.handleChangeIng.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleNewIngredient(event) {
        const {ingredients} = this.state; // same as const ingredients = this.state.ingredients...object destructuring
        this.setState({ingredients: [...ingredients, ""]}); // empty because you listen to the onChange event
    }

    handleChangeIng(event) {
        const index = Number(event.target.name.split("-")[1]); //the name property is ingredient-index, splitting at the "-" and returning just the index
        const ingredients = this.state.ingredients.map((ing, i) => (
            i === index ? event.target.value : ing // if i is equal to index I'm looking for, I want to return the new value, othrwise return same value i already had
        ));
        this.setState({ingredients});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSave({...this.state}); // passinf in all the values from this.state
        this.setState({  // clearing out the form
            title: "",
            instructions: "",
            ingredients: [""],
            img: ""
        })
    }

    render() {
        const {title, instructions, img, ingredients} = this.state;
        const {onClose} = this.props;
        let inputs = ingredients.map((ing, index) => (
            <div 
            className="recipe-form-line"
            key={`ingredient-${index}`}>
                <label>{index+1}.
                    <input
                        type="text"
                        name={`ingredient-${index}`}
                        value={ing}
                        size={45}
                        autoComplete="off"
                        placeholder=" Ingredient"
                        onChange={this.handleChangeIng} />
                </label>
            </div>
        ));
        return (
            <div className="recipe-form-container">
                <form className="recipe-form" onSubmit={this.handleSubmit}>
                    <button 
                        type="button"
                        className="close-button"
                        onClick={onClose}
                    >
                        X
                    </button>
                    <div className="recipe-form-line">
                        <label htmlFor="recipe-title-input">Title</label>
                        <input 
                            id="recipe-title-input"
                            key="title"
                            name="title"
                            type="text"
                            value={title}
                            size={42}
                            autoComplete="off"
                            onChange={this.handleChange}/>
                    </div>
                    <label
                        htmlFor='recipe-instructions-input'
                        style={{marginTop: '5px'}}
                    >
                        Instructions
                    </label>
                    <textarea
                        key='instructions'
                        id='recipe-instructions-input'
                        type='Instructions'
                        name='instructions'
                        rows='8'
                        cols='50'
                        autoComplete='off'
                        value={instructions}
                        onChange={this.handleChange}/>
                    {inputs}
                    <button
                        type="button"
                        onClick={this.handleNewIngredient}
                        className="buttons"
                    >
                        +
                    </button>
                    <div className='recipe-form-line'>
                        <label htmlFor='recipe-img-input'>Image Url</label>
                        <input
                        id='recipe-img-input'
                        type='text'
                        placeholder=''
                        name='img'
                        value={img}
                        size={36}
                        autoComplete='off'
                        onChange={this.handleChange} />
                    </div>
                    <button
                        type="submit"
                        className="buttons"
                        style={{alignSelf: 'flex-end', marginRight: 0}}
                    >
                        SAVE
                    </button>
                </form>
            </div>
        )
    }


}

export default RecipeInput;