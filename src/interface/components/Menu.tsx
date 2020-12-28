import * as React from 'react'

import './Menu.css'
import Icon from '../assets/xstore.svg'

class Menu extends React.Component {
	render () {
		return (
			<div className="menu">
				<section>
					<a href="" draggable="false" className="icon">
						<img draggable="false" src={Icon}/>
					</a>
				</section>
				<section className="right">
					<a href="" className="button">Home</a>
					<a href="#" className="button">Search</a>
					<a href="" className="button">Library</a>
					<a href="" className="button">Account</a>
				</section>
			</div>
		)
	}
}

export default Menu
