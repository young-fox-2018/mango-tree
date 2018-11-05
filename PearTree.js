"use strict"

const FruitTree = require('./FruitTree')
const Fruit = require('./Fruit')

class PearTree extends FruitTree {

    constructor () {
      super()
      this._typeFruit = 'pear'
      this._matureAge = 3
      this._stopHeightAge = 7
      this._dieAge = 11

    }

    getFruit() {
        return new Pear()
      }
  }

  
  
  class Pear extends Fruit{
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

  module.exports = PearTree