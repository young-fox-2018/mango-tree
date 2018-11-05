"use strict"

const FruitTree = require('./FruitTree')

class AppleTree extends FruitTree {

    // Initialize a new MangoTree
    constructor () {
      super()
      this._typeFruit = 'apple'
      this._matureAge = 3
      this._stopHeightAge = 6
      this._dieAge = 10
      // this._age = 0
      // this._height = 0
      // this._fruits = []
      // this._healthStatus = true
      // this._harvested = 0
    }
  }
  
  // console.log(new MangoTree())
  
  
  class Apple{
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

  let appleTree = new AppleTree()


  do {
    appleTree.grow();
    appleTree.produceFruits();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report ] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
  } while (appleTree.healthStatus != false)
