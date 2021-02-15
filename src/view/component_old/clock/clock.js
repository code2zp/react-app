import React from 'react'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date().toLocaleTimeString()
    }
  }

  render () {
    return (
      <div>
        <h1>现在的时间是:</h1>
        <h2>{ this.state.date }</h2>
      </div>
    )
  }

  tick () {
    this.setState({
      date: new Date().toLocaleTimeString()
    })
  }

  // 组件即将渲染
  UNSAFE_componentWillMount () {
    console.log('组件即将渲染')
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000)
  }

  // 组件渲染完毕
  componentDidMount () {
    console.log('组件渲染完毕')
  }

  // 组件销毁之前
  componentWillUnmount () {
    clearInterval(this.timerId)
  }
}

export default Clock
