import { Component } from 'react'

class Title extends Component {
  clickTitleHeader(e) {
    console.log(e.target.innerHTML)
    console.log('you click title!')
    console.log(this)
  }
  render() {
    return (
      <div>
        <h1 onClick={this.clickTitleHeader}>React 小书 </h1>
        <h2>&#9728;</h2>
        <h2>&#9757;</h2>
      </div>
    )
  }
}


export default Title