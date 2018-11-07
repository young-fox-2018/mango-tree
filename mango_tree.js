"use strict"
const fruit_Tree = require('./Fruit_Tree')
const fruit = require('./Fruit')

// Release 0

class MangoTree extends fruit_Tree{
  // Initialize a new MangoTree
  constructor () {
    super()
    this._fruitful = 2
    this._matured = 16  
    this._dead = 20
  }
  getFruit(){
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
    //  console.log(mangoTree)
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested this year= ${mangoTree.harvested}`)
   } while (mangoTree.healthStatus != false)