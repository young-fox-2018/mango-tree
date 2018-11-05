"use strict"

const FruitTree = require('./FruitTree')

class PearTree extends FruitTree {

    // Initialize a new MangoTree
    constructor () {
      super()
      this._typeFruit = 'pear'
      this._matureAge = 3
      this._stopHeightAge = 7
      this._dieAge = 11
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

  let pearTree = new PearTree()


  do {
    pearTree.grow();
    pearTree.produceFruits();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report ] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested}`)
  } while (pearTree.healthStatus != false)
