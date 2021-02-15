import Clock from './view/component/clock/clock'
import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isShowClock: true
    }
  }

  handleShowOrHide () {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }

  render () {
    return (
      <div>
        {this.state.isShowClock ? <Clock /> : null }
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或隐藏时钟
        </button>
      </div>
    )
  }
}

export default App
