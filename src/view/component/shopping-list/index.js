/** shopping list
 * @author zheng
 */
import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'

// 引入组件
import Commodity from './getCommodity'

const liStyle = {
  cursor: 'pointer'
}

class ShoppingList extends React.Component {
  constructor () {
    super()
    this.state = {
      commodity: '默认'
    }
    this.name = '0'
  }

  // 设置props的类型
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  // 设置props的默认值
  static defaultProps = {
    name: 'defaultShopping'
  }

  // 事件监听
  handClickOnUl (e) {
    this.name = String(Number(this.name) + 1)
    // console.log(this.name)
    if (e.target.tagName === 'LI') {
      console.log('state...')
      console.log(this.state.commodity)
      this.setState({
        commodity: e.target.innerText
      })
      console.log(this.state.commodity)
    }
  }

  render () {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul onClick={ this.handClickOnUl.bind(this) }>
          <li style={ liStyle }>Instagram</li>
          <li style={ liStyle }>WhatsApp</li>
          <li style={ liStyle }>Oculus</li>
        </ul>
        <Commodity commodity={this.state.commodity} name={ this.name }></Commodity>
        {/* <Commodity></Commodity> */}
      </div>
    )
  }
}

export default ShoppingList
