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

  produceFruits() {
    if (this.age >= this.matureAge) {
      for (let i = 0; i <= this.random(8, 20); i++) {
        let fruit = new Fruit()
        this.fruits.push(fruit)
      }
    }
  }
}

module.exports = FruitTree