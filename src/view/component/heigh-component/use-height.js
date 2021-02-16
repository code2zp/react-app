import React from 'react'
import HeightComponent from './index'

let UseHeight = class UseHeight extends React.Component {
  render () {
    return (
      <div>
        <h1>使用高级组件</h1>
      </div>
    )
  }
}

UseHeight = HeightComponent(UseHeight)

export default UseHeight
