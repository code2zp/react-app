import React from 'react'
import PropTypes from 'prop-types'

const Commodity = function ({ commodity, name }) {
  return (
    <div>
      <h2> { commodity } </h2>
      <h2> 点击了 { name } 次 </h2>
    </div>
  )
}

Commodity.propTypes = {
  commodity: PropTypes.string,
  name: PropTypes.string
}

Commodity.defaultProps = {
  commodity: '默认',
  name: '默认名称'
}

export default Commodity
