import React, {useState} from "react";
import Menu from "../svg/bars-solid.svg";
import Close from "../svg/times-solid.svg";
import CartIcon from "../svg/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import "../css/Header.css";
import {DataContext} from './Context'
import {useContext} from 'react'


export const Header = () => {
  const {cart} = useContext(DataContext)

    const [state, setstate] = useState({toggle:false})

 

const menuToggle = () =>{
    setstate({toggle: !state.toggle})
}
const {toggle}  = state
  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <img src={Menu} width="20" alt="alt" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">Nike</Link>
        </h1>
      </div>
      <nav className={toggle ? "toggle" : ""}>
        <ul>
          <li>
            <Link onClick={menuToggle}  to="/">Home</Link>
          </li>
          <li>
            <Link onClick={menuToggle}  to="/product">Product</Link>
          </li>
          <li>
            <Link onClick={menuToggle}  to="/contact">Contact</Link>
          </li>
          <li>
            <Link onClick={menuToggle}  to="/about">About</Link>
          </li>
          <li>
            <Link onClick={menuToggle}  to="/login">Login/Register</Link>
          </li>
        </ul>

        <div className="close" onClick={menuToggle}>
          <img src={Close} width="20" alt="alt" />
        </div>
      </nav>
      
      <div className="nav-cart">
    
          <span>{cart && cart.length}</span>
         
          <Link to="/cart">
            <img src={CartIcon} width="20" alt="alt" />
          </Link>
        </div>
    </header>
     
  );
  
};
