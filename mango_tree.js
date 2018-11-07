"use strict"
const FruitTree = require('./fruit_tree')
const Mango = require('./mango')

class MangoTree extends FruitTree {
  constructor() {
    super()
    this._matureAge = 5
    this._stopGrow = 16
    this._deadAge = 20
    this._heightLimit = 7
    this._fruit = Mango
  }
}


module.exports = MangoTree


