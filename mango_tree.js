class FruitTree {

  // Initialize a new FruitTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._health = true
    this._harvested = ""
    this._matureAge = 10
    this._deadAge = 19
    this._teenAge = 3
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._health
  }

  get harvested () {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age = this._age + 1
    if (this._age < this._matureAge) {
      this._height = this._height + Math.random()
    }
    else if (this._age >= this._deadAge) {
      this._health = false

    }
    else {
      this._height = this._height + Math.random()
    }

  }

  // Produce some fruits
  produceFruits () {
    if (this._age > this._teenAge) {
      let random = Math.floor(Math.random()*10)
      this._fruits = []
      for (var i = 0; i < random; i++) {
        this._fruits.push(new Fruit())
      }
    }

  }

  // Get some fruits
  harvest () {
    let fruitsHarvested = this.fruits.length
    let good = 0
    let bad = 0
    for (var i = 0; i < this.fruits.length; i++) {
      if (this._fruits[i].quality === "good") {
        good = good + 1
      }
      else {
        bad = bad + 1
      }
    }
    let result = `${fruitsHarvested} (${good} good, ${bad} bad)`
    this._harvested = result
  }
}
class Fruit {
  // Produce a Fruit
  constructor () {
    const quality = ["good", "bad"]
    this.quality = quality[Math.round(Math.random())]
  }
}
"use strict"

// Release 0

class MangoTree extends FruitTree {
  constructor() {
    super()
    this._matureAge = 10
    this._deadAge = 30
    this._teenAge = 5
  }
}

class Mango extends Fruit{
  constructor () {
    super()
  }
}

class AppleTree extends FruitTree {
  constructor() {
    super()
    this._matureAge = 5
    this._deadAge = 15
    this._teenAge = 2
  }
}
class Apple extends Fruit{
  constructor () {
    super()
  }
}

class PearTree extends FruitTree {
  constructor() {
    super()
    this._matureAge = 5
    this._deadAge = 15
    this._teenAge = 2
  }
}
class Pear extends Fruit{
  constructor () {
    super()
  }
}

let mangoTree = new MangoTree()
console.log("Pohon mangga hidup");
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log("Pohon mangga mati");

let appleTree = new AppleTree()
console.log("Pohon apel hidup");
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log("Pohon apel mati");

let pearTree = new PearTree()
console.log("Pohon pear hidup");
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log("Pohon pear mati");
