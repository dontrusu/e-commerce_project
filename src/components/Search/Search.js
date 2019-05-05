import React, { Component } from 'react'
import './Search.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { InputGroup, FormControl, Button } from 'react-bootstrap';


class Search extends Component {
  render() {
      return (
          <div className='search_wrapper'>
              <InputGroup className="align-middle search_input" size={'lg'}>
                <FontAwesomeIcon className='icon' icon={faSearch} />
                <FormControl
                  placeholder="Поиск"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary">Найти</Button>
                </InputGroup.Append>
              </InputGroup>
          </div>

      )
  } 
}

export default Search;