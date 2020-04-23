import React, {Component} from 'react';

class RecipeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            instructions: "",
            ingredients: [""],
            img: ""
        };
    }

}

export default RecipeInput;