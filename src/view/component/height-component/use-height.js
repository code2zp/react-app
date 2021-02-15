import { Component } from 'react'
import HeightComponent from './heightComponent'

class Test extends Component {
  render() {
    return (
      <div>
        <h1>这是一个测试组件</h1>
        <h2>{ this.props.date }</h2>
      </div>
    )
  }
}

Test = HeightComponent(Test)
export default Test