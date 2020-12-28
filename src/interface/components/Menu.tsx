import * as React from 'react'

import './Menu.css'
import Icon from '../assets/xstore.svg'

class Menu extends React.Component {
	render () {
		return (
			<div className="menu">
				<section>
					<a href="" draggable="false">
						<img draggable="false" src={Icon}/>
					</a>
				</section>
				<section className="right">
					<a href="">Home</a>
					<a href="#">Search</a>
					<a href="">Library</a>
					<a href="">Account</a>
				</section>
			</div>
		)
	}
}

export default Menu
