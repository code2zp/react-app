import Clock from './view/component/clock/clock'
import { Component } from 'react'


// function App() {
// }
// App.prototype = new Component()
// App.prototype.state =  {
//     isShowClock: true
// }
// App.prototype.render = function () {
//   return (
//     <div>
//         {this.state.isShowClock ? <Clock /> : null }
//         <button onClick={this.handleShowOrHide.bind(this)}>
//           显示或隐藏时钟
//         </button>
//     </div>
//   )
// }
// App.prototype.handleShowOrHide = function () {
//   this.setState({
//     isShowClock: !this.state.isShowClock
//   })
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      isShowClock: true
    }
  }
  handleShowOrHide() {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }
  render() {
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
