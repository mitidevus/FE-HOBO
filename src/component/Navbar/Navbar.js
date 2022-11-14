import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import './style.css'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <h1 id="HOBO">HOBO</h1>
        <NavMenu> 
            <NavLink to="/" activeStyle>Home</NavLink>
            <NavLink to="/search" activeStyle>Search</NavLink>                 
            <NavLink to="/hotel" activeStyle>Hotel</NavLink>          
            <NavLink to="/about" activeStyle>About</NavLink>           
            <NavLink to="/contact" activeStyle>Contact</NavLink>
                            
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;