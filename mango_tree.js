"use strict"

const FruitTree = require('./FruitTree')
const Fruit = require('./FruitTree')
// console.log(FruitTree)
// Release 0

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor () {
    super('mango')
    this._typeFruit = 'Mango'
    this._matureAge = 2
    this._stopHeightAge = 6
    this._dieAge = 10
    // this._age = 0
    // this._height = 0
    // this._fruits = []
    // this._healthStatus = true
    // this._harvested = 0

    
  }

  getFruit() {
    return new Mango()
  }
}

// console.log(new MangoTree())


class Mango extends Fruit{

  // Produce a mango
  // constructor () {
  //   this.quality = this.Quality()
  // }

  // Quality(){
  //   let arrQuality = ['bad','good']
  //   let random = Math.round(Math.random())
  //   return arrQuality[random]

  // }
}

// console.log(new MangoTree().grow())
// console.log(new Mango)


  // driver code untuk release 0
  let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceFruits();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report ] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthStatus != false)
