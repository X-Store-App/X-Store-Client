import React from 'react'

import '../style/components/SearchInput.scss'
import '../style/common.sass'

class SearchInput extends React.Component {
  props!: {
    value?: string;
    placeholder?: string;
    width?: string;
    height?: string;
  }

  render () {
    return (
    <div className="search" style={{ width: this.props.width, height: this.props.height }}>
      <img src='../static/search-black-18dp.svg' alt="search material design google"/>
      <input type="text" value={this.props.value} placeholder={this.props.placeholder}/>
    </div>)
  }
}

export { SearchInput }
