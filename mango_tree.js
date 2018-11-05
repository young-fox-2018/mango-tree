"use strict"

// Release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0 
    this._height = 0
    this._fruits = [] 
    this._harvested = 0 
    this._status = true
    this.matureage = 0
    this.stopGrow = 0
    this.dead = 0
  }

  get age () {
    return this._age
  }
  set age(num) {
    this._age = num
  }

  get height () {
    return this._height
  }

  set height(num) {
    this._height = num
  }

  get fruits () {
    return this._fruits
  }


  get healthStatus () {
    return this._status
  }

  get harvested () {
    return this._harvested 
  }

  // Get current states here

  // Grow the tree
  grow () {
    let random = Math.floor(Math.random() * 5)
    if (this.age === this.dead) {
      this._status = false
    }else {
      this.age += 1 // this.age = this.age + 1
    }
    if (this.age <= this.stopGrow) {
      this.height += random
    }
  }

  // Produce some mangoes
  produceMangoes () {
    let random = Math.floor(Math.random() * 20)

    if ( this.age >= this.matureage && this.age <= this.dead) {
      while(this._fruits.length < random) {
        // let obj = new Mango()
        this._fruits.push(new Fruit())
      }
    }

  }

  // Get some fruits
  harvest () {
    let good = 0
    let bad = 0 
    
    for (let i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i].quality == 'good'){
        good++
      }else if (this._fruits[i].quality == 'bad') {
        bad++
      }
    }
    
    this._harvested = `${this._fruits.length} (${good} good, ${bad} bad) `
    this._fruits = []
  }

}

class Fruit {
  // Produce a mango
  constructor () {
    this.quality = this.generateQuality()
  }

  generateQuality() {
    const quality = ['good' , 'bad']
    const random = Math.floor(Math.random() * quality.length) 
    return quality[random]
  }
}



// Release 1
class AppleTree extends FruitTree{
  constructor() {
    super()
    this.matureage = 5
    this.stopGrow = 10
    this.dead = 15
  }
}
class Apple extends Fruit {}

// Release 2
class MangoTree extends FruitTree{
  constructor() {
    super()
    this.matureage = 10
    this.stopGrow = 15
    this.dead = 20
  }
}
class Mango extends Fruit {
  
}

//  driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  // console.log(mangoTree._fruits)
  mangoTree.harvest();
      console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)
  
  let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceMangoes();
  // console.log(mangoTree._fruits)
  appleTree.harvest();
      console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
  } while (appleTree.healthStatus != false)
  
  