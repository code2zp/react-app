import React from 'react'

export default (WarppedComponent) => {
  class NewComponent extends React.Component {
    render () {
      return (
        <div>
          <h1>这是一个函数返回的组件</h1>
        </div>
      )
    }
  }
  return NewComponent
}
