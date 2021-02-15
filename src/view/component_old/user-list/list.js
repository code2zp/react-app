import React, { Component } from 'react'

class UserList extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
        <hr />
      </div>
    )
  }
}

class Index extends Component {
  constructor () {
    super()
    this.userlist = [
      { username: 'Jerry', age: 21, gender: 'male' },
      { username: 'Tomy', age: 22, gender: 'male' },
      { username: 'Lily', age: 19, gender: 'female' },
      { username: 'Lucy', age: 20, gender: 'female' }
    ]
  }

  render () {
    return (
      <div>
        {this.userlist.map((item, index) => <UserList user={item} key={ index }></UserList>) }
      </div>
    )
  }
}

export default Index
