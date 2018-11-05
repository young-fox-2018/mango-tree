"use strict"

// Release 0

class FruitTree {
  // Initialize a new MangoTree
  constructor(matureAge, maxAge) {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = 0
    this._healthStatus = true
    this._matureAge = Math.round(Math.random() * (10 - 5) + matureAge)
    this._maxAge = Math.round(Math.random() * (20 - 10) + maxAge)
    this._totalFruits = [0, 0, 0]
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
    return this.healthStatus
  }

  get harvested() {
    return this._harvested

  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1
    if (this._age < this._matureAge) this._height += Math.random() * 1.5
    if (this._age > this._matureAge) this._healthStatus = false
  }

  // Produce some mangoes
  produceFruit() {
    let randomProduced = Math.round(Math.random() * (10 - 2) + 10)
    if (this._age > this._matureAge) {
      for (let i = 0; i < randomProduced; i++) {
        this._fruits.push(new Fruit())
      }
    }

  }

  // Get some fruits
  harvest() {
    let goodFruit = 0,
      badFruit = 0
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality === 'good') {
        goodFruit++
        this._totalFruits[0]++
        this._totalFruits[1]++
      } else {
        badFruit++
        this._totalFruits[0]++
        this._totalFruits[2]++
      }
    }
    this._harvested = `${this._totalFruits[0]} (${this._totalFruits[1]} good, ${this._totalFruits[2]} bad)`
    this._fruits = []
    this._totalFruits = [0, 0, 0]
  }

}

class Fruit {
  // Produce a fruit
  constructor() {
    this._quality = this.randomQuality()
  }
  randomQuality() {
    let randomQuality = Math.round(Math.random())
    if (randomQuality === 0) return 'bad'
    else return 'good'
  }
}

class MangoTree extends FruitTree {
  constructor() {
    super(16, 20)

  }
}
class Mango extends Fruit {
  constructor() {

  }
}
class AppleTree extends FruitTree {
  constructor() {
    super(19, 30)

  }
}
class Apple extends Fruit {
  constructor() {

  }
}
class PearTree extends FruitTree {
  constructor() {
    super(16, 25)

  }
}
class Pear extends Fruit {
  constructor() {

  }
}


/**
 * driver code untuk release 0
 * let pearTree = new MangoTree()
 * do {
 *   mangoTree.grow();
 *   mangoTree.produceMangoes();
 *   mangoTree.harvest();
 *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
 * } while (mangoTree.healthStatus != false)
 */
let mangoTree = new MangoTree()
let appleTree = new AppleTree()
let pearTree = new PearTree()
// console.log(mangoTree)
console.log('===============================Manggo===============================')
do {
  mangoTree.grow();
  mangoTree.produceFruit();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree._healthStatus != false)
console.log('===============================Apple================================')
do {
  appleTree.grow();
  appleTree.produceFruit();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} | Fruits harvested = ${appleTree._harvested}`)
} while (appleTree._healthStatus != false)
console.log('===============================Pear================================')
do {
  pearTree.grow();
  pearTree.produceFruit();
  pearTree.harvest();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} | Fruits harvested = ${pearTree._harvested}`)
} while (pearTree._healthStatus != false)

// // Release 1
// class AppleTree {}
// class Apple {}

// // Release 2
// class FruitTree {}
// class Fruit {}