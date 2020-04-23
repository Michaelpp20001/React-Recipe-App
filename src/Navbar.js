import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    static defaultProps = {
        onNewRecipe() {}
    }
    render () {
        const {title} = this.props;

        return (
            <nav>
                <div className="title">{title}</div>
                <div className="nav-links">
                    <a onClick={this.props.onNewRecipe}>New Recipe</a>
                    <a>Home</a>
                    <a>About</a>
                    <a>Contact Us</a>
                </div>
            </nav>
        )
    };
}

export default Navbar;