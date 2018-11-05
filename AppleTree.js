"use strict"

const FruitTree = require('./FruitTree')
const Fruit = require('./Fruit')
const Apple = require('./Apple')

class AppleTree extends FruitTree {

    // Initialize a new MangoTree
    constructor () {
      super()
      this._typeFruit = 'apple'
      this._matureAge = 3
      this._stopHeightAge = 6
      this._dieAge = 10

    }

    getFruit() {
        return new Apple()
      }
  }
  

module.exports = AppleTree