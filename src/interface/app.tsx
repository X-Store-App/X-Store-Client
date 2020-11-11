import React from 'react'

import { Menu } from './components/Menu'

import './style/common.sass'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Menu />
      </div>
    )
  }
}

export default App
