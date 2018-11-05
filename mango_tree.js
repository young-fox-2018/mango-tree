"use strict"
const FruitTree = require('./fruit_tree')
// Release 0
const Mango = require('./mango')

class MangoTree extends FruitTree {
  constructor() {
    super()
    this._matureAge = 5
    this._stopGrow = 16
    this._deadAge = 20
    this._fruit = Mango
  }
  // Grow the tree
  grow() {
    let heightLimit = 7
    this.age += 1
    if (this.age < this._stopGrow && this.height < heightLimit) {
      this.height += Math.floor(Math.random() * heightLimit * 2) / 10
    }
    if (this.age === this.deadAge) {
      this._healthStatus = false
    }

  }

  // Produce some mangoes
  produceMangoes() {
    if (this.age >= this.matureAge) {
      let randomFruits = Math.round(Math.random() * 10) + 1
      for (let i = 0; i < randomFruits; i++) {
        this.fruits.push(new this._fruit())
      }
    }
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i]._quality === `Good`) {
        good++
      } else if (this.fruits[i]._quality === `Bad`) {
        bad++
      }
    }
    this.harvested = `${this.fruits.length} (${good} good, ${bad} bad)`
    this.fruits = []
  }

}

let mangoTree = new MangoTree()
console.log(`==============================Mangoe Tree!=============================`)
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  if (!mangoTree.healthStatus) console.log(`The tree has met its end`)
} while (mangoTree.healthStatus != false)



module.exports = MangoTree


