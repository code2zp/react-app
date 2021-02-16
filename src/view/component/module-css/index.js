import React from 'react'
import styles from './test.module.css'
import styled from 'styled-components'

const MyStyle = styled.h1`
  backGround: red;
  fontSize: 30;
`

class ModuleCss extends React.Component {
  render () {
    return (
      <div>
        <h1 className={styles.test}>这是一个css测试类</h1>
        <MyStyle>
          这是一个style component的测试
        </MyStyle>
      </div>
    )
  }
}

export default ModuleCss
