"use strict"
const Fruit = require("./fruit")
// Release 0
class FruitTree {
  // Initialize a new Tree
  constructor (matureAge, ageStopGrow, deadAge) {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._fruit = new Fruit()
    this._healthStatus = true
    this._harvested = ""
    this._matureAge = matureAge
    this._ageStopGrow = ageStopGrow
    this._deadAge = deadAge
  }

  get fruit() {
    return this._fruit
  }

  get age () {
      return this._age
  }
  set age(num) {
      this._age += num
  }

  get height () {
      return this._height
  }

  set height(num) {
      return this._height += num
  }
  
  get fruits () {
      return this._fruits
  }

  get healthStatus () {
      return this._healthStatus
  }

  set healthStatus(value) {
      return this._healthStatus = value
  }
  get harvested () {
      return this._harvested
  }

  set harvested (str) {
      return this._harvested = str
  }

  get matureAge() {
    return this._matureAge
  }

  get ageStopGrow() {
    return this._ageStopGrow
  }
  
  get deadAge() {
    return this._deadAge
  }
  // Get current states here

  // Grow the tree
  grow () {
      if (this.deadAge == this.age) {
          this.healthStatus = false
      }
      else if (this.age < this.ageStopGrow){
          this.height = Math.floor(Math.random()* 3) + 1
      }
      this.age = 1
  }

  produce () {
    if (this.age > this.matureAge) {
        let random_loop = Math.floor(Math.random() * 7) + 1
        for (let i = 0; i < random_loop; i++) {
              this._fruits.push(this.fruit)
        }
    }
  }
  // Get some fruits
  harvest () {
      let good = 0
      let bad = 0
      this.fruits.forEach(fruit => {
          if (fruit._quality == "good") {
              good += 1
          } else {
              bad += 1
          }
      });
      this.harvested = `${this.fruits.length} ( ${good} good, ${bad} bad)`
      this._fruits = []
  }

}

module.exports = FruitTree



/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree(0, 10, 15) // matureAge, ageStopGrow, deadAge
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthStatus != false)
  */




// Release 1
// class AppleTree {}
// class Apple {}

// // Release 2
// class FruitTree {}
// class Fruit {}
