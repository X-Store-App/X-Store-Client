import React from 'react'
import logo from '../static/xstore.png'

import '../style/components/Menu.sass'

class Menu extends React.Component {
  render () {
    return (
    <div className="menu">
      <img src={logo} alt="XStore logo"/>
    </div>)
  }
}

export { Menu }
