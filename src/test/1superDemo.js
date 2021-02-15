// class 继承

class Foo {
  constructor ({ x = 0, y = 0 } = { }) {
    this.x = x
    this.y = y
  }

  toString () {
    console.log('acd')
  }
}

class Bar extends Foo {
  // constructor (a, b) {
  //   super({})
  //   this.name = a
  //   this.age = b
  //   console.log('打印父类内容')
  //   super.toString()
  // }
}

const bar = new Bar()
console.log(bar) // Bar { x: 0, y: 0, name: 3, age: 4 }
