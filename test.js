// var random = Math.floor(Math.random() * 10)+1
// console.log(random)
// const badGood = ['good','bad']
// class Mango {
//     // Produce a mango
//     constructor () {
//       this.quality = badGood[Math.floor(Math.random() * 2)]
//     }
//   }
//   const mangga = new Mango
//   console.log(mangga)
"use strict"

// Release 0

class FruitTree {

  // Initialize a new FruitTree
  constructor (mature,endGrow,dead) {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = ""
    this._status = true
    this.matureAge = mature
    this.endGrow = endGrow
    this.dead = dead
  }

  get age () {
    return this._age
  }

  set age(input){
    this._age = input
  }

  get height () {
    return this._height
  }

  set height(input){
    this._height = input
  }

  get fruits () {
    return this._fruits
  }

  set fruits(input){
    this._fruits = input
  }

  get healthStatus () {
    return this._status
  }

  set healthStatus(input){
    this._status = input
  }

  get harvested () {
    return this._harvested
  }

  set harvested(input){
    this._harvested = input
  }

  // Grow the tree
  grow () {
    this.fruits = []
    this.harvested = ""
    this.age += 1

    if(this.age < this.dead){
      if(this.age <= this.endGrow){
        this.height += Math.floor(Math.random()*100)
      }
    } else {
      this.healthStatus = false
    }
  }

  // Produce some fruits
  produceFruits () {
      if(this.age >= this.matureAge){
        let jumlahBuah = Math.floor(Math.random()*20) //jumlah buah tiap tahun (random)
  
        for(let i = 0; i < jumlahBuah; i++){
          let condition = Math.round(Math.random()) // sebagai parameter class Fruit; 0 "good" or 1 "bad"
          let fruit = new Fruit(condition)
          this.fruits.push(fruit)
        }
      }
  }

  // Get some fruits
  harvest () {
    let countGood = 0
    let countBad = 0

    for( let i = 0; i < this.fruits.length; i++){
      if(this.fruits[i].quality === "good"){
        countGood++
      } else{
        countBad++
      }
    }
    this.harvested = `${this._fruits.length} (${countGood} good, ${countBad} bad)`
  }

}

const condition = ["good","bad"]

class Fruit {
  // Produce a fruit
  constructor (quality) {
    this.quality = condition[quality]
  }
}

console.log("\n"+ "-----FRUITS TREE-----")
console.log("The tree is alive! :smile:")
let fruitTree = new FruitTree(10,15,20)

do {
  fruitTree.grow();
  fruitTree.produceFruits();
  fruitTree.harvest();
  console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} cm | Fruits harvested = ${fruitTree.harvested}`)
} while (fruitTree.healthStatus !== false)

console.log("The tree has met its end. :sad:")


// -----------------------APPLE TREE------------------------------------//
// Release 2
class AppleTree extends FruitTree{}
class Apple extends Fruit{}

console.log("\n"+ "-----APPLE TREE-----")
console.log("The tree is alive! :smile:")
let appleTree = new AppleTree(5,10,15)

do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} cm | Apple harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus !== false)

console.log("The tree has met its end. :sad:")



// ---------------------------MANGO TREE--------------------------------------//
class MangoTree extends FruitTree{}
class Mango extends Fruit{}

console.log("\n"+ "-----MANGO TREE-----")
console.log("The tree is alive! :smile:")
let mangoTree = new MangoTree(2,5,15)

do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} cm | Mango harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus !== false)

console.log("The tree has met its end. :sad:")

// ---------------------------PEAR TREE--------------------------------------//
class PearTree extends FruitTree{}
class Pear extends Fruit{}

console.log("\n"+ "-----PEAR TREE-----")
console.log("The tree is alive! :smile:")
let pearTree = new PearTree(2,3,5)

do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} cm | Mango harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus !== false)

console.log("The tree has met its end. :sad:")
