"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = ''
    this._health = true
    this._matureAge = 6
    this._growAge = 13
    this._deadAge = 20
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

  // Get current states here

  // Grow the tree
  grow () {
    this.age = 1
    if(this.age <= this.growAge)this.height = this.randomInt(1.2,0.5)
    if(this.age >= this.deadAge) this.healthStatus = false
  }

  // Produce some mangoes
  produceMangoes () {
    let bucket = []
    if(this.age >= this.matureAge) {
      let fruitsOnTree = this.randomInt(50,1)
      for (let i = 0; i < fruitsOnTree; i++) {
        let fruit = new Mango()
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

class Mango {
  // Produce a mango
  constructor () {
    this._quality = this.randomQuality()
  }
  randomQuality(){
    let value = null
    value = Math.round(Math.random())
    if (value === 0) return 'bad'
    else return 'good'
  }

  get quality() {
    return this._quality
  }
}

// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)



// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
