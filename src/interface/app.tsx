import React from 'react'

import { Menu } from './components/Menu'
import { Content } from './components/Content'

import './style/common.sass'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Menu />
        <Content frame={<div></div>}/>
      </div>
    )
  }
}

export default App
