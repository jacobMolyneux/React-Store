import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './NavigationBar.css'

export default class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product: this.props.product,
            quantity: this.props.quantity,
            totalPrice: this.quantity + this.props.price,
        }
    }
    render(){
    return(
            <div id = 'navbarHolder'>
            <h1>Logo</h1>
            <div>
                <Router>
                <nav id = 'linkDiv'>
                    <ul>
                        <li>
                            <Link to ='/'> Home </Link>
                        </li>
                        <li> 
                            <Link to = '/Shop'> Shop </Link>
                        </li>
                        <li>
                            <Link to = '/Cart'> Cart </Link>
                        </li>
                        <li>
                            <div id = 'cartDiv'>
                                <div id = 'cartIconDiv'></div>
                                <div id = 'cartQuanityDiv' key = {this.props.quantity}>{this.props.quantity}</div>
                            </div>
                        </li>
                    </ul>
                </nav>
                </Router>
            </div>
            
        </div>
        
        
    )
    }
}