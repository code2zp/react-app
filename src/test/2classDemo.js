class Point {
  constructor ({ x, y } = { x: 0, y: 0 }) {
    this.x = x
    this.y = y
  }

  toString () {
    return '(' + this.x + ', ' + this.y + ')'
  }

  test () {
    console.log('这是一个测试方法')
  }
}

const point = new Point()

// point.test()

function Test (x, y) {
  this.x = x
  this.y = y
}
console.log('函数的原型函数')
console.log(Test.prototype.constructor === Test)

Test.prototype.fun = 9999
const test = new Test(1, 2)

const prototypeObj = test.constructor
console.log(prototypeObj.prototype.fun)

const Fun = function ({ x = 0, y = 0 } = {}) {
  this.x = x
  this.y = y
}
// 原型属性,通过此构造函数创建的所有对象共享原型属性
Fun.prototype.shareData = function () {
  console.log(1111)
}

const fun2 = new Fun()
fun2.constructor.prototype.shareData()

const Test2 = function () { }

Test2.prototype.constructor = function (x, y) {
  console.log('查看原型中的this')
  this.x = x
  this.y = y
  console.log(this)
}

const test2 = new Test2.prototype.constructor(10, 20)
console.log(test2)
