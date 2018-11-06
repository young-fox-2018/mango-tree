const fruit_Tree = require('./fruit_tree')
const fruit = require('./fruit')

// Release 1
class PearTree extends fruit_Tree{
    // Initialize a new PearTree
    constructor () {
      super()
      this._fruitful = 6
      this._matured = 13  
      this._dead = 30
      this._min = 0
      this._max = 2
    }

    get fruit () {
      return new Pear()
    }
  }
  
  class Pear extends fruit{
    // Produce a pear
    constructor () {
      super()
    }
  }
  
    // driver code untuk release 0
  let pearTree = new PearTree()
  do {
    pearTree.grow();
    pearTree.produceFruit();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested this year = ${pearTree.harvested}, good: ${pearTree.goodFruit}, bad: ${pearTree.badFruit}`)
  } while (pearTree.healthStatus != false)
  module.exports = PearTree