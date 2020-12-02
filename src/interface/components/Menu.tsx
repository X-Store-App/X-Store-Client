import React, { useState } from 'react'

import '../style/components/Menu.sass'
import '../style/common.sass'
import '@xstoreapp/react-design/src/components/button.sass'
import '@xstoreapp/react-design/src/components/input.sass'

import { SearchInput } from '../components/SearchInput'

function Menu () {
	const [isVisible, setIsVisible] = useState(false)
	return (
		<div className="menu border bbottom bg text">
			<img alt="XStore logo" src="../static/xstore.png"/>
			<section className="buttons">
				<section className="left">
					<button className='button'>Explore</button>
					<button className='button' onClick={
						() => {
							setIsVisible(!isVisible)
						}}>Search</button>
					<button className='button'>Library</button>
					<button className='button'>Account</button>
				</section>
				<section className="right">
					<button className="button">Settings</button>
				</section>
				<section style={{ width: 100 + '%', display: isVisible === false ? 'none' : 'block' }}>
					<SearchInput width={100 + '%'} height={100 + '%'}/>
				</section>
			</section>
		</div>)
}

export { Menu }
