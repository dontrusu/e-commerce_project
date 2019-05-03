import React, { Component } from 'react'
import './Search.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class Search extends Component {
  render() {
      return (
          <div className='form_wrapper'>
            <form>
              <FontAwesomeIcon className='icon' icon={faSearch} />
              <input className='search_input' type="text" placeholder="Поиск" />
              <input className="button" type="submit" name="submit" value="Найти"/> 
            </form>
          </div>
      )
  } 
}

export default Search;