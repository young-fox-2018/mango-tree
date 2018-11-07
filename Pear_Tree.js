const fruit_Tree = require('./Fruit_Tree')
const fruit = require('./Fruit')

// Release 1
class PearTree extends fruit_Tree{
    // Initialize a new MangoTree
    constructor () {
      super()
      this._fruitful = 0
      this._matured = 5  
      this._dead = 10
    }
    getFruit(){
      return new Pear()
    }
  }
  
  class Pear extends fruit{
    // Produce a pear
    constructor () {
      super()
    }
  }
  
  //   driver code untuk release 0
  let pearTree = new PearTree()
  do {
    pearTree.grow();
    pearTree.produceFruit();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested this year= ${pearTree.harvested}`)
  } while (pearTree.healthStatus != false)