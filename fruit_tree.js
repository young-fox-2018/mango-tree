"use strict"

// Release 0
const Fruit = require('./fruit.js')

class FruitTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = ''
    this._health = true
    this._matureAge = 5
    this._growAge = 13
    this._deadAge = 20
    this._kindFruit = Fruit
    this._maxHeight = 1.2
    this._minHeight = 0.5
    this._maxFruits = 50
    this._minFruits = 1
  }

  get matureAge() {
    return this._matureAge
  }

  get growAge() {
    return this._growAge
  }

  get deadAge(){
    return this._deadAge
  }

  get age () {
    return this._age
  }
  set age (input) {
    this._age = this._age + input
  }

  get height () {
    return this._height.toFixed(2)
  }
  set height(input) {
    this._height = this._height + input
  }

  get fruits () {
    return this._fruits
  }
  set fruits(input) {
    return this._fruits = input
  }

  get healthStatus () {
    return this._health
  }
  set healthStatus (input) {
    this._health = input
  }

  get harvested () {
    return this._harvested
  }
  set harvested (input) {
    this._harvested = input
  }

  get kindFruit () {
    return this._kindFruit
  }

  get maxHeight () {
    return this._maxHeight
  }

  get minHeight () {
    return this._minHeight
  }

  get maxFruits () {
    return this._maxFruits
  }

  get minFruits () {
    return this._minFruits
  }

  // Get current states here

  // Grow the tree
  grow () {
    this.age = 1
    if(this.age <= this.growAge) this.height = this.randomInt(this.maxHeight,this.minHeight)
    if(this.age >= this.deadAge) this.healthStatus = false
  }

  // Produce some mangoes
  produce () {
    let bucket = []
    if(this.age >= this.matureAge) {
      let fruitsOnTree = this.randomInt(this.maxFruits,this.minFruits)
      for (let i = 0; i < fruitsOnTree; i++) {
        let fruit = new this.kindFruit()
        bucket.push(fruit)
      }
    }
    this.fruits = bucket
  }

  // Get some fruits
  harvest () {
    let harvestThisYear = this.fruits
    let good = 0
    let bad = 0
    if(harvestThisYear.length >= 1) {  
      this.fruits = 0
      harvestThisYear.forEach(fruit => {
        if(fruit.quality === 'good') good++
        else bad++
      })
    }
    this.harvested =  `${harvestThisYear.length} (${good} good, ${bad} bad)`
  }

  randomInt(min,max) {
      return Math.random() * (max - min) + min;
  }

}


module.exports = FruitTree