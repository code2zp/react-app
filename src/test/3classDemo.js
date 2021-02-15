// get和set的定义

class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
    this._pop = undefined
  }

  set pop (val) {
    console.log('set is a pop')
    this._pop = val
  }

  get pop () {
    console.log('this is a pop')
    return this._pop
  }
}

const point = new Point(10, 20)

point.pop = 100
console.log(this.pop)
