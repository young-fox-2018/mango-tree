const fruit_Tree = require('./Fruit_Tree')
const fruit = require('./Fruit')

// Release 1
class AppleTree extends fruit_Tree{
    // Initialize a new AppleTree
    constructor () {
      super()
      this._fruitful = 5
      this._matured = 8  
      this._dead = 20
      this._min = 1
      this._max = 2
    }

    get fruit () {
      return new Apple()
    }
  }
  
  class Apple extends fruit{
    // Produce a apple
    constructor () {
      super()
    }
  }
  
  //   driver code untuk release 0
  let appleTree = new AppleTree()
  do {
    appleTree.grow();
    appleTree.produceFruit();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested this year = ${appleTree.harvested}, good: ${appleTree.goodFruit}, bad: ${appleTree.badFruit}`)
  } while (appleTree.healthStatus != false)
  module.exports = AppleTree