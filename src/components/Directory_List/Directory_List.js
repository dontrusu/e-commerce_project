import React, { Component } from 'react'
import './Directory_List.css'
import json from '../../e-commerse.json'

import { Button,ButtonToolbar } from 'react-bootstrap';

const array_category = json.yml_catalog.shop.categories.category;
const categoryItems = array_category.map((category) =>
  <li><a href='#'>{category.__text}</a></li>
);

class Directory_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ''
    }
  }


  render() {
      return (
<ButtonToolbar>
  <Button variant="outline-primary">Primary</Button>
  <Button variant="outline-secondary">Secondary</Button>
  <Button variant="outline-success">Success</Button>
  <Button variant="outline-warning">Warning</Button>
  <Button variant="outline-danger">Danger</Button>
  <Button variant="outline-info">Info</Button>
  <Button variant="outline-light">Light</Button>
  <Button variant="outline-dark">Dark</Button>
</ButtonToolbar>
      )
  } 
}

export default Directory_List;