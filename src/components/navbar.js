import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (


      <MDBNavbar color="indigo" dark expand="md" style={{backgroundColor:"#4834DF"}} >
        <MDBNavbarBrand>
          <strong className="white-text">HT GLOBAL SYSTEMS</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/services">Services</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/carrer">Carriers</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">About Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact">Contact Us</MDBNavLink>
            </MDBNavItem>
            
          </MDBNavbarNav>
         
        </MDBCollapse>
      </MDBNavbar>

    );
  }
}

export default Navbar;