const fruit_Tree = require('./Fruit_Tree')
const fruit = require('./Fruit')

// Release 1
class AppleTree extends fruit_Tree{
  // Initialize a new MangoTree
  constructor () {
    super()
    this._fruitful = 1
    this._matured = 14  
    this._dead = 15
  }
  getFruit(){
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
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested this year= ${appleTree.harvested}`)
  } while (appleTree.healthStatus != false)