// 测试es6 class的各种功能
// 1. 构造函数创建对象
const Fun = function ({ x = 0, y = 0 } = {}) {
  this.x = x
  this.y = y
}
// 原型属性,通过此构造函数创建的所有对象共享原型属性
Fun.prototype.shareData = 100

const fun = new Fun()
const fun2 = new Fun()

fun.constructor.prototype.shareData = 40
// console.log(fun)
// console.log(fun.constructor.prototype)
console.log(fun2.constructor.prototype)

// 2. es class 语法创建对象

class Demo {
  static shareData = 50
  constructor ({ x = 0, y = 0 } = {}) {
    this.x = x
    this.y = y
  }

  static sayName () {
    console.log('这是一个静态方法')
  }
}

class DemoChild extends Demo {
  constructor () {
    super(10, 3)
    // this.x = super.x
    // this.y = super.y
  }
}

const demochild = new DemoChild()
console.log(demochild)
