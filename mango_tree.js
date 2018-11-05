"use strict"

const Mango = require('./mango')
const FruitTree = require('./fruit_tree')

class MangoTree extends FruitTree {
  constructor() {
    super()
  }

  // Grow the tree
  grow() {
    this._age += 1
    this._matureAge = this.random(3, 5)
    this._stopGrow = this.random(10, 13)
    this._died = this.random(15, 18)
    if (this._age <= this._died) {
      if (this._age <= this._stopGrow) {
        this._height += this.random(1, 3)
      }
    }
    else {
      this._healthStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if (this._age >= this._matureAge) {
      for (let i = 0; i <= this.random(8, 20); i++) {
        let mango = new Mango()
        this._fruits.push(mango)
      }
    }
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality === 'good') {
        good += 1
      }
      else {
        bad += 1
      }
    }
    this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`
    this._fruits = []
  }

  random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

}

let mangoTree = new MangoTree()
do {
  mangoTree.grow()
  mangoTree.produceMangoes()
  mangoTree.harvest()
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)