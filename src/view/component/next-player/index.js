import React from 'react'
import PropTypes from 'prop-types'

class Square extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    testFun: PropTypes.func.isRequired
  }

  render () {
    return (
      <button className="square" onClick={ () => this.props.onClick() }>
        {this.props.value}
      </button>
    )
  }
}

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  handleClick (i) {
    const squares = this.state.squares.slice()
    squares[i] = 'X'
    this.setState({ squares: squares })
  }

  renderSquare (i) {
    return <Square value={this.state.squares[i]} onClick={this.handleClick.bind(this, i)} testFun={ () => console.log(i) } />
  }

  render () {
    const status = 'Next player: X'

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render () {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

export default Game
