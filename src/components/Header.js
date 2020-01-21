import React, {Component} from "react"; 
import logo from "../logo.svg";
import {Link} from "react-router-dom";

export default class Header extends Component { 
  render () {
    return (
      <header>
        <div className="container h-flex">
          <Link className="logo" to="/">
            <img src={logo} alt="logo"></img>
          </Link>
          <nav className="links">
            <ul>
              <li>
                <Link className="menu_links" to="/">Stripe</Link>
              </li>
              <li>
                <Link className="menu_links" to="/profile/">Profile</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header> 
    )
  }
} 