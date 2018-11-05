"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age = 0, height = 0, deadAge = 40, matureAge = 10, stopGrow = 30, ) {
    this._age = age
    this._height = height
    this._fruits = []
    this._harvested = []
    this._healthStatus = true
    this._deadAge = 40
    this._matureAge = 10
    this._stopGrow = 30
  }
  //age
  get age() {
    return this._age
  }
  set age(input) {
    this._age = input
  }
  //height
  get height() {
    return this._height.toFixed(2)
  }
  set height(input) {
    this._height = input
  }
  // fruits
  get fruits() {
    return this._fruits
  }
  set fruits(fruit) {
    this._fruits = fruit
  }

  get healthStatus() {
    return this._healthstatus
  }
  set healthStatus(input) {
    this._healthStatus = input
  }

  get harvested() {
    return this._harvested
  }
  // Get current states here
  set harvested(param) {
    this._harvested = param
  }
  // Grow the tree
  randomize() {
    return Math.ceil(Math.random() * 5) + 1
  }

  grow() {
    if (this.age == this._deadAge) {
      this.healthStatus = false
    } else {
      this._age += 1
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let good = 0
    let bad = 0
    if (this._healthStatus === false) {
      console.log(`This tree is ded !`)
    } else if (this._age < this._matureAge) {
      this._height += Math.random() * 4 + 1
    } else if (this._age < this._stopGrow) {
      this._height += Math.random() * 4 + 1
      let goodBad = ['good', 'bad']
      for (let i = 0; i < this.randomize(); i++) {
        let quality = ""
        quality = goodBad[Math.round(Math.random())]
        if (quality === 'good') {
          good += 1
        } else {
          bad += 1
        }
      }
    } else {
      let goodBad = ['good', 'bad']
      for (let i = 0; i < this.randomize(); i++) {
        let quality = ""
        quality = goodBad[Math.round(Math.random())]
        if (quality === 'good') {
          good += 1
        } else {
          bad += 1
        }
      }
    }
    if (this._healthStatus !== false) {
      let fruit = new Mango(good, bad)
      this.fruits = fruit
      this.harvested = fruit
    }
  }

  // Get some fruits
  harvest() {
    this.harvested = `${this.fruits._total} GOOD: ${this.fruits._good} and BAD: ${this.fruits._bad}`
    this._fruit = []
  }

}

class Mango {
  // Produce a mango
  constructor(good, bad) {
    this._good = good
    this._bad = bad
    this._total = this.getTotal()
  }

  getTotal() {
    return this._good + this._bad
  }
}

/**
  * driver code untuk release 0
  */
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree._healthStatus != false)


// Release 1
// class AppleTree { }
// class Apple { }

// // Release 2
// class FruitTree { }
// class Fruit { }
