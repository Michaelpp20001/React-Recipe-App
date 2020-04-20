import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    render () {
        const {title} = this.props;
        const nav = this.props.nav.map((nav, i) => (
        <a href="" key={i}>{nav}</a> 
        ));
        return (
            <nav>
                <div className="title">{title}</div>
                <div className="nav-links">{nav}</div>
            </nav>
        )
    };
}

export default Navbar;