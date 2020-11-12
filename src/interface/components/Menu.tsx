import React from 'react'

import '../style/components/Menu.sass'
import '../style/themes/light.sass'
import '../style/common.sass'

class Menu extends React.Component {
  render () {
    return (
    <div className="menu border bbottom bg text">
      <img alt="XStore logo"/>
      <section className="buttons">
        <section className="left">
          <button className='button'>Explore</button>
          <button className='button'>Search</button>
          <button className='button'>Library</button>
          <button className='button'>Account</button>
        </section>
        <section className="right">
          <button className="button">Settings</button>
        </section>
      </section>
    </div>)
  }
}

export { Menu }
