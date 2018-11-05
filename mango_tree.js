"use strict"

// Release 0
const goodBad = ["good", "bad"]
/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthStatus != false)
  */

// Release 2
class FruitTree{
   // Initialize a new MangoTree
   constructor() {
    this._age = 0
    this._batasUsia = 30
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvest = 0
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruits
  }

  get healthStatus() {
    return this._healthStatus
  }

  get harvested() {
    return this._harvest
  }


  // Get current states here

  // Grow the tree
  grow() {
    let umur = this._batasUsia

    if (this._age < umur) {
      this._age++
      if (this._age <= 15) {
        this._height += Math.random()
      }

    } else {
      this._healthStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let random = Math.floor(Math.random() * 10)
    this._fruits = []
    for (let i = 0; i < random; i++) {
      this._fruits.push(
        new Fruit()
      )
    }
  }

  // Get some fruits
  harvest() {
    let fruitHarvested = this._fruits.length
    let good1 = 0
    let bad1 = 0
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].quality == "good") {
        good1++
      } else if (this._fruits[i].quality == "bad") {
        bad1++
      }
    }

    this._harvest = `${fruitHarvested} (${good1} Good, ${bad1} Bad`
  }
}
class Fruit{
  // Produce a mango
  constructor() {
    this.quality = goodBad[Math.round(
      Math.random()
    )]
  }
}


class MangoTree extends FruitTree{
  constructor() {
    super()
    this._batasUsia = 10
   
  }
 
}
class Mango {
    // Produce a mango
    constructor() {
      this.quality = goodBad[Math.round(
        Math.random()
      )]
    }
}
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();

  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvest}`)
} while (mangoTree._healthStatus != false)

class PearTree {

}