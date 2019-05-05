import React, { Component } from 'react'
import './Header.css'

import like from './svg/like.svg'
import basket from './svg/basket.svg'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Header extends Component {
  render() {
      return (
        <Navbar id="nav-dropdown" className='.justify-content-center header' text='white' expand="lg">
            <Navbar.Brand className='brand'  variant="white" href="#home">CLOTHING STORE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='.justify-content-center'>
                    <Nav.Link className='link' href="#registration">Войти/Регистрация</Nav.Link>
                    <Nav.Link className='link' href="#favorites"> <img src={like}/>Избранное</Nav.Link>
                    <Nav.Link className='link' href="#basket"><img src={basket}/>Корзина (0)</Nav.Link>
                    <NavDropdown title="USD" id="basic-nav-dropdown" variant="white">
                        <NavDropdown.Item href="#">RUB</NavDropdown.Item>
                        <NavDropdown.Item href="#">UAH</NavDropdown.Item>
                        <NavDropdown.Item href="#">EUR</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     
      )
  } 
}

export default Header;
        // <header>
        //     <h1>clothing store</h1>
        //     <ul className='main_menu'>
        //         <li className='main_link'><a href="#">Войти/Регистрация</a></li>
        //         <li className='main_link'><a href="#"><img src={like}/>Избранное</a></li>
        //         <li className='main_link'><a href="#"><img src={basket}/>Корзина (0)</a></li>
        //         <li className='main_link'>
        //             <a href="#">UAH</a>
        //             <ul>
        //                 <li><a href="#">USD</a></li>
        //                 <li><a href="#">EUR</a></li>
        //                 <li><a href="#">RUB</a></li>
        //             </ul>
        //         </li>
        //     </ul>
        // </header>