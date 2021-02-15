/** shopping list
 * @author zheng
 */
import React from 'react'
import PropTypes from 'prop-types'

class ShoppingList extends React.Component {
  // 设置props的类型
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  // 设置props的默认值
  static defaultProps = {
    name: 'defaultShopping'
  }

  render () {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    )
  }
}

export default ShoppingList
