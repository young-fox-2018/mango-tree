"use strict"
const fruit_Tree = require('./Fruit_Tree')
const fruit = require('./Fruit')

// Release 0

class MangoTree extends fruit_Tree{

  // Initialize a new MangoTree
  constructor () {
    super()
    this._fruitful = 3
    this._matured = 10  
    this._dead = 25
    this._min = 1
    this._max = 3
  }

  getFruit () {
    return new Mango()
  }
}

class Mango extends fruit{
  // Produce a mango
  constructor () {
    super()
  }
}

//   driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceFruit();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested this year = ${mangoTree.harvested}, good: ${mangoTree.goodFruit}, bad: ${mangoTree.badFruit}`)
   } while (mangoTree.healthStatus != false)
module.exports = MangoTree