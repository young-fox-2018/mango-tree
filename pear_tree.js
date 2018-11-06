"use strict"

const Pear = require('./pear')
const FruitTree = require('./fruit_tree')

class PearTree extends FruitTree{
  constructor() {
    super()
  }

  // Grow the tree
  grow() {
    this.age += 1
    this.matureAge = this.random(3, 5)
    this.stopGrow = this.random(10, 13)
    this.died = this.random(15, 18)
    if (this.age <= this.died) {
      if (this.age <= this.stopGrow) {
        this.height += this.random(1, 3)
      }
    }
    else {
      this.healthStatus = false
    }
  }

  // Produce some pears
  produceFruits() {
    if (this.age >= this.matureAge) {
      for (let i = 0; i <= this.random(8, 20); i++) {
        let pear = new Pear()
        this.fruits.push(pear)
      }
    }
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].quality === 'good') {
        good += 1
      }
      else {
        bad += 1
      }
    }
    this.harvested = `${this.fruits.length} (${good} good, ${bad} bad)`
    this.fruits = []
  }

  random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

}

module.exports = PearTree