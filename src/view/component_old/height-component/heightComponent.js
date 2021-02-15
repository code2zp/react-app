// 高阶组件

import React, { Component } from 'react'

// 高阶组件是一个函数
const HeightComponent = (OldComponent) => {
  class NewComponent extends Component {
    render () {
      return (
        <OldComponent date="9999999999"></OldComponent>
      )
    }
  }
  return NewComponent
}

export default HeightComponent
