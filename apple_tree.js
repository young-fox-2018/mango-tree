"use strict"

const Apple = require('./apple')
const FruitTree = require('./fruit_tree')

class AppleTree extends FruitTree {
  constructor() {
    super()
  }

  // Produce some apples
  produceFruits() {
    if (this.age >= this.matureAge) {
      for (let i = 0; i <= this.random(8, 20); i++) {
        let apple = new Apple()
        this.fruits.push(apple)
      }
    }
  }
}

module.exports = AppleTree