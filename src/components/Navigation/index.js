import React from 'react'
import { NavLink } from 'react-router-dom';
import "./style.css"
// Bootstrp
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from './Wsignature.png'

function Navigation() {

  
  return (
    <>
      <Navbar className="navbar navbar-dark" id="navid" expand="lg">
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Brand >
    <img
      alt=""
      src={logo}
      width="150"
      height="50"
      className="d-inline-block align-top"
    />
  </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact activeClassName="link-active" className="link p-0 mt-3 mr-3 text-uppercase font-weight-bold" to="/"   >About</NavLink>
            <NavLink activeClassName="link-active" className="link p-0 mt-3 mr-3 text-uppercase font-weight-bold" to="/Projects" >Projects</NavLink>
            <NavLink activeClassName="link-active" className="link p-0 mt-3 mr-3 text-uppercase font-weight-bold" to="/Contact"  >Contact</NavLink>
            <NavLink activeClassName="link-active" className="link p-0 mt-3 mr-3 text-uppercase font-weight-bold" to="./Resume" target="_blank" >resume</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
  
}
export default Navigation;