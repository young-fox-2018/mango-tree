"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = 0
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
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }

  // // Get current states here

  // // Grow the tree
  grow () {
    let mature = 3
    let die = 12

    if (this._age <= die) {
      this._height  += Math.floor(Math.random() * (3 - 1) + 1)
    }

    if (this._age <= die) {
      this._age += 1
    }

    if (this._age >= mature && this._age <= die ) {
      this.produceMangoes()
      this.harvest()
    }

    if (this._age >= die) {
      this._healthStatus = false
    }

    return this
  }

  // // Produce some mangoes
  produceMangoes () {
    let random = Math.floor(Math.random() * (15 - 3) + 3)
    // console.log('aa')
    this._fruits = []
    for ( let i = 0; i < random; i++) {

      this._fruits.push(new Mango())
    }
    // this._fruits = [1,2,3,4]
  }

  harvest() {
    let fruits = this._fruits
    let good = 0
    let bad = 0
    // console.log('aaaa')
    for ( let i = 0; i < fruits.length; i++) {
      if (fruits[i].quality === 'bad') {
        bad += 1
      } else {
        good += 1
      }
    }

    this._harvested = `${fruits.length} (${good} good, ${bad} bad)`

  }

}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = this.Quality()
  }

  Quality(){
    let arrQuality = ['bad','good']
    let random = Math.round(Math.random())
    return arrQuality[random]

  }
}

// console.log(new MangoTree().grow())
// console.log(new Mango)


  // driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthStatus != false)


// Release 1
class AppleTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = 0
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
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }

  // // Get current states here

  // // Grow the tree
  grow () {
    let mature = 2
    let die = 8

    if (this._age <= die) {
      this._height  += Math.floor(Math.random() * (3 - 1) + 1)
    }

    if (this._age <= die) {
      this._age += 1
    }

    if (this._age >= mature && this._age <= die ) {
      this.produceApples()
      this.harvest()
    }

    if (this._age >= die) {
      this._healthStatus = false
    }

    return this
  }

  // // Produce some mangoes
  produceApples () {
    let random = Math.floor(Math.random() * (15 - 3) + 3)
    // console.log('aa')
    this._fruits = []
    for ( let i = 0; i < random; i++) {

      this._fruits.push(new Apple())
    }
    // this._fruits = [1,2,3,4]
  }

  harvest() {
    let fruits = this._fruits
    let good = 0
    let bad = 0
    // console.log('aaaa')
    for ( let i = 0; i < fruits.length; i++) {
      if (fruits[i].quality === 'bad') {
        bad += 1
      } else {
        good += 1
      }
    }

    this._harvested = `${fruits.length} (${good} good, ${bad} bad)`

  }

}

class Apple {
  // Produce a mango
  constructor () {
    this.quality = this.Quality()
  }

  Quality(){
    let arrQuality = ['bad','good']
    let random = Math.round(Math.random())
    return arrQuality[random]

  }
}

console.log ('APLE') 

let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)


// Release 2
class FruitTree {}
class Fruit {}
