import React from 'react'
import PropTypes from 'prop-types'
import HeightComponent from './heightComponent'

class Test extends React.Component {
  static propTypes = {
    date: PropTypes.string.isRequired
  }

  render () {
    return (
        <div>
        <h1>这是一个测试组件</h1>
        <h2>{ this.props.date }</h2>
      </div>
    )
  }
}

export default HeightComponent(Test)
