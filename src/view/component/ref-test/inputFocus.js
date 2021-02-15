import { Component } from 'react'

class FocusInput extends Component {
  componentDidMount() {
    this.input.focus()
  }
  render() {
    return (
      <input ref={ (input) => this.input = input}></input>
    )
  }
}

export default FocusInput