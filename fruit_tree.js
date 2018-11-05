"use strict"

let Fruit = require('./fruit')

class FruitTree {

  // Initialize a new Tree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._matureAge = this.getRandom(3,6)
    this._stopGrowAge = this.getRandom(15, 21)
    this._deadAge = this.getRandom(21,25)
  }

  getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height.toFixed(2)
  }

  set height (num){
    this._height += num
  }

  get fruits () {
    return this._fruits
  }

  set fruits(arr){
    this._fruits = arr
  }

  get healthStatus () {
    return this._healthStatus
  }

  set healthStatus (value) {
    this._healthStatus = value
  }

  get harvested () {
    return this.harvest()
  }

  // Get current states here

  // Grow the tree
  grow () {
    if(this.age < this._deadAge-2) this._age++
    else if(this.age === this._deadAge-2){
      this._age++
      this.healthStatus = false
    } 
    
    if(this.age < this._stopGrowAge) this.height = Math.random() * 2
  }

  // Produce some fruits
  produceFruits () {
    let limit = this.getRandom(1, 15)
    if(this.age >= this._matureAge){
      let arr = []
      for(let i = 0; i < limit; i++){
        arr.push(new Fruit())
      }
      this.fruits = arr
    }
  }

  // Get some fruits
  harvest () {
    let goodFruit = 0
    let badFruit = 0
    this.fruits.forEach(item => {
      if(item.quality === "good") goodFruit++
      else badFruit++
    })
    return `${this.fruits.length} (${goodFruit} good, ${badFruit} bad)`
  }

}

module.exports = FruitTree


