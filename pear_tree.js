"use strict"
const FruitTree = require('./fruit_tree')
const Pear = require('./pear_fruit')

class PearTree extends FruitTree{

  constructor () {
    super()
  }
  
  produceFruits () {
    let limit = this.getRandom(1, 15)
    if(this.age >= this._matureAge){
      let arr = []
      for(let i = 0; i < limit; i++){
        arr.push(new Pear())
      }
      this.fruits = arr
    }
  }

}

module.exports = PearTree
