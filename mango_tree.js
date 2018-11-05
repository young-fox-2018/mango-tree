"use strict"
const Tree = require("./tree")
const Mango = require("./mango")
class MangoTree extends Tree {
  constructor() {
    super()
    this.matureAge = 3
    this.stopGrow = 10
    this.dead = 20
  }
  randomFruit() {
    return Math.random() * 20
  }

  grow() {
    this.age = 1
    if (this._age < this.stopGrow) {
      this.height = ((Math.random() * 2) + 1)
    }
    if (this._age >= this.dead) this._healthStatus = false
  }
  produceMangoes() {
    let GOOD = 0
    let BAD = 0
    if (this.age >= this.matureAge) {
      for (let i = 0; i < this.randomFruit(); i++) {
        let data = Math.floor(Math.random() * 2)
        if (data === 1) GOOD++
        else BAD++
      }
    }
    let buah = new Mango(GOOD, BAD)
    this.fruits = buah
  }

  harvest() {
    this.harvested = `${this.fruits.total} (GOOD: ${this.fruits.good} BAD:${this.fruits.bad}`
    this._fruits = ""
  }

}

// * driver code untuk release 0
console.log("=== Manggo Tree =====");

let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)


