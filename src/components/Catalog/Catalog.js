import React, { Component } from 'react'
import data from "../../json_data/data.js"
import { Accordion, AccordionItem } from 'react-sanfona';
import './Catalog.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


let title = (
	<button className="title">
		<FontAwesomeIcon icon={faBars} size="lg"/>
		<span className="title"> Каталог</span>
	</button>
)


var categories = data.shop.categories.category;

let Categories = (props) => {
	return(
		<div className="categoryWrapper">
			<button className="category">
				{props.text}
			</button>
		</div>
	)
}

export default class Catalog extends Component{

	render(){
		return(
			<div className = "catalog">
				<Accordion>
					<AccordionItem title={title} duration="1000">
						{categories.map(index => <Categories text={index.__text} key={index._id}/>)}
					</AccordionItem>
				</Accordion>
			</div>
		)
	}
}