import React, { Component } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Search from './components/Search/Search.js';
import Catalog from './components/Catalog/Catalog.js';
import Social_Network from './components/Social_Network/Social_Network'


class App extends Component {
  render() {
      return (
        <div className='page_wrapper'>
          <Header />
          <Search />
          <Social_Network />
          <Catalog />
        </div>
      )
  } 
}

export default App;
