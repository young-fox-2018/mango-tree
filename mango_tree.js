"use strict"
const FruitTree = require('./fruit_tree')
const Mango = require('./mango_fruit')

class MangoTree extends FruitTree{

  constructor () {
    super()
  }

  // Produce some mangoes
  produceFruits () {
    let limit = this.getRandom(1, 15)
    if(this.age >= this._matureAge){
      let arr = []
      for(let i = 0; i < limit; i++){
        arr.push(new Mango())
      }
      this.fruits = arr
    }
  }

}

module.exports = MangoTree
