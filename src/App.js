import React, { Component } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Search from './components/Search/Search.js'
import Social_Network from './components/Social_Network/Social_Network.js'


class App extends Component {
  render() {
      return (
        <div className='page_wrapper'>
          <Header />
          <Search />
          <Social_Network />
        </div>
      )
  } 
}

export default App;
