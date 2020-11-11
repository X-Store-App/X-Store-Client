import React from 'react'

import '../style/components/Content.sass'
import '../style/themes/light.sass'
import '../style/common.sass'

class Content extends React.Component {
  props!: {children: React.ReactNode}

  render () {
    return (
    <div id="content">
      {this.props.children}
    </div>)
  }
}

export { Content }
