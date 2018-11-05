"use strict"

class FruitTree {
    constructor () {
      this._age = 0
      this._height = 0
      this._fruits = []
      this._harvested = ''
      this._healthStatus = true
      this._matureAge = 0
      this._stopGrow = 0
      this._died = 0
    }
  
    get age () {
      return this._age
    }
  
    get height () {
      return this._height + ' m'
    }
  
    get fruits () {
      return this._fruits
    }
  
    get harvested () {
      return this._harvested
    }
  
    get healthStatus () {
      return this._healthStatus
    }
  
    get matureAge() {
      return this._matureAge
    }
  
    get stopGrow() {
      return this._stopGrow
    }
  
    get died() {
      return this._died
    }
}

module.exports = FruitTree