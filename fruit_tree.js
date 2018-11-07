"use strict"

class FruitTree {
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = ''
    this._healthStatus = true
    this._matureAge = 0
    this._stopGrow = 0
    this._died = 0
  }

  get age() {
    return this._age
  }

  set age(input) {
    this._age = input
  }

  get height() {
    return this._height
  }

  set height(input) {
    this._height = input
  }

  get fruits() {
    return this._fruits
  }

  set fruits(input) {
    this._fruits = input
  }

  get harvested() {
    return this._harvested
  }

  set harvested(input) {
    this._harvested = input
  }

  get healthStatus() {
    return this._healthStatus
  }

  set healthStatus(input) {
    this._healthStatus = input
  }

  get matureAge() {
    return this._matureAge
  }

  set matureAge(input) {
    this._matureAge = input
  }

  get stopGrow() {
    return this._stopGrow
  }

  set stopGrow(input) {
    this._stopGrow = input
  }

  get died() {
    return this._died
  }

  set died(input) {
    this._died = input
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

  // Produce some fruits
  produceFruits() {
    if (this.age >= this.matureAge) {
      for (let i = 0; i <= this.random(8, 20); i++) {
        let fruit = new Fruit()
        this.fruits.push(fruit)
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


module.exports = FruitTree