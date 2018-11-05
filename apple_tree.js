"use strict"
const FruitTree = require('./fruit_tree')
const Apple = require('./apple_fruit')

class AppleTree extends FruitTree{

  constructor () {
    super()
  }

  produceApples () {
    let limit = this.getRandom(1, 15)
    if(this.age >= this._matureAge){
      let arr = []
      for(let i = 0; i < limit; i++){
        arr.push(new Apple())
      }
      this.fruits = arr
    }
  }

}

module.exports = AppleTree