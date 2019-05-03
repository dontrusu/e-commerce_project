import React, { Component } from 'react'
import './Header.css'

import like from './svg/like.svg'
import basket from './svg/basket.svg'

class Header extends Component {
  render() {
      return (
        <header>
            <h1>clothing store</h1>
            <ul className='main_menu'>
                <li className='main_link'><a href="#">Войти/Регистрация</a></li>
                <li className='main_link'><a href="#"><img src={like}/>Избранное</a></li>
                <li className='main_link'><a href="#"><img src={basket}/>Корзина (0)</a></li>
                <li className='main_link'>
                    <a href="#">UAH</a>
                    <ul>
                        <li><a href="#">USD</a></li>
                        <li><a href="#">EUR</a></li>
                        <li><a href="#">RUB</a></li>
                    </ul>
                </li>
            </ul>
        </header>
     
      )
  } 
}

export default Header;
