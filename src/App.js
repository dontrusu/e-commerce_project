import React, { Component } from 'react'
import './App.css'

import json from './e-commerse.json'
import Header from './components/Header/Header'
import Search from './components/Search/Search.js'
import Social_Network from './components/Social_Network/Social_Network'
import Directory_List from './components/Directory_List/Directory_List'

import { Container, Row, Col } from 'react-bootstrap';

const array_category = json.yml_catalog.shop.currencies;
console.log(array_category)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UAH : true,
      RUB : false,
      USD : false,
      EUR : false
    }
  }


  render() {
      return (
        <Container>
          <Row>
            <Col >
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>
              <Search />
            </Col>
          </Row>
          <Row>
            <Col>
              <Social_Network />
            </Col>
          </Row>
        </Container>
      )
  } 
}

export default App;
