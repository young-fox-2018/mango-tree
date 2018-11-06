"use strict"

// Release 0
const badGood = ['good','bad']
class Tree {
  // Initialize a new MangoTree
  constructor (matureAge, dieAge) {
    this._age =  0
    this._height =  0
    this._fruits =  [] 
    this._healthStatus = true
    this._harvested = ''
    this._matureAge = matureAge
    this._dieAge = dieAge
  }


  get age () {
    return this._age
  }
  set age (age) {
     this._age = age
     return this
  }

  get height () {
    return this._height
  }
  set height (height) {
    this._height = height
    return this
  }

  get fruits () {
    return this._fruits
  }
  set fruits (fruits) {
     this._fruits = fruits
     return this
  }

  get healthStatus () {
    return this._healthStatus
  }
  set healthStatus (status) {
     this._healthStatus = status
     return this
  }

  get harvested () {
    return this._harvested
  }
  set harvested (panen) {
     this._harvested = panen
     return this
  }

  // Get current states here
  // Grow the tree
  grow () {
    this.age += 1
    if(this.age <= this._matureAge){
      let randomHeight = Math.floor(Math.random() * 30)+10
      this.height += randomHeight / 100
    }
    if(this.age === this._dieAge) {
      this.healthStatus = false
    } 
  }

  // Produce some fruits
  produceFruits() {
    this.fruits = []
    if(this.age >= 2 && this.age <= this._matureAge ) {
      let randomFruits = Math.floor(Math.random() * 20)+5
      console.log(randomFruits)

      for (let i = 0; i < randomFruits; i++) {
        
        let fruit = new Fruit()
        this.fruits.push(fruit)
      }
      console.log(this.fruits.length)
    }
  }

  // Get some fruits
  harvest () {
    let countGood = 0
    let countBad = 0
    for (let i = 0; i < this.fruits.length; i++) {
      if(this.fruits[i].quality === 'good') {
        countGood += 1
      } else {
        countBad += 1
      }
    }
    this.harvested = `${this.fruits.length} (${countGood} good, ${countBad} bad)`
  }
}
class Fruit {
  // Produce a fruit
  constructor () {
    this.quality = badGood[Math.floor(Math.random() * 2)]
  }
}

class AppleTree extends Tree {
  constructor(matureAge,dieAge,name){
    super(matureAge,dieAge)
    this._name = name || 'Apple'
  }
  get name(){
    return this._name
  }
}
class Apple extends Fruit {}

class MangoTree extends Tree {
  constructor(matureAge,dieAge,name){
    super(matureAge,dieAge)
    this._name = name || 'Mango'
  }
  get name(){
    return this._name
  }
}
class Mango extends Fruit {}

// Release 1
/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested} `)
  * } while (mangoTree.healthStatus != false)
  */
 
console.log("\n"+ "-----MANGO TREE-----")
console.log("The tree is alive! :smile:")
 let mangoTree = new MangoTree(15,20)
  do {
    mangoTree.grow();
    mangoTree.produceFruits();   
    mangoTree.harvest();   
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed('1')} m | ${mangoTree.name} harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)
console.log("The tree has met its end. :sad:")
  
// Release 2
console.log("\n"+ "-----Apple TREE-----")
console.log("The tree is alive! :smile:")
 let appleTree = new AppleTree(15,20)
  do {
    appleTree.grow();
    appleTree.produceFruits();   
    appleTree.harvest();   
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed('1')} m | ${appleTree.name} harvested = ${appleTree.harvested}`)
  } while (appleTree.healthStatus != false)
console.log("The tree has met its end. :sad:")
