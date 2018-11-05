"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {

    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthStatus = true;
    this._harvested = {};
    this._matureAge = 2;
    this._stopGrowingAge = 10;
    this._dyingAge = 20;
    this._fruitName = Mango;
    this._heightIncrement = (Math.random() * 5)
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height.toFixed(2)
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return `${this._harvested.sum} (${this._harvested.good} good, ${this._harvested.bad} badd )`
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age++ ;
    if(this._age < this._stopGrowingAge){
      this._height += this._heightIncrement
    }
    if(this._age === this._dyingAge){
      this._healthStatus = false;
    }
    
  }
  
  // Produce some mangoes
 produceMangoes () {
    if(this._age > this._matureAge){
      let fruitSum =  this.RndIntg(0,10)
      
      for (let i = 0; i < fruitSum ; i++){
        let currentFruits = new this._fruitName();
        this._fruits.push(currentFruits)
      }
    }
  }

  // Get some fruits
  harvest () {
    this._harvested.sum = this._fruits.length;
    let goodCounter = 0
    let badCounter = 0

    for ( let i = 0; i < this._fruits.length; i++){
      if (this.fruits[i]._quality === "bad") badCounter++
      else goodCounter++
    }
    this._harvested.good = goodCounter
    this._harvested.bad = badCounter
    this._fruits = [];
  }

  RndIntg(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

}



class Mango {
  // Produce a mango
  constructor () {
    this._quality = this.randomGoodBad()
  }
  
  randomGoodBad(){
    let quality = Math.round(Math.random())
    
    if(quality == 0) return "bad";
    else return "good";
  }
}

// console.log(`The tree is alive :smile:`)
// let mantree = new MangoTree()
// while (mantree._healthStatus !== false){
//   mantree.grow()
//   mantree.produceMangoes()
//   mantree.harvest()
//   console.log(`[Year ${mantree.age} Report] Height - ${mantree.height} | Fruits harvested = ${mantree.harvested}`)

// }


// console.log(mantree)
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

// Release 1
class AppleTree extends MangoTree {
  constructor(matureAge, stopGrowingAge, dyingAge, fruitName, heightIncrement){
    super()
    this._matureAge = matureAge;
    this._stopGrowingAge = stopGrowingAge;
    this._dyingAge = dyingAge;
    this._fruitName = fruitName;
    this._heightIncrement = heightIncrement
  }
}
class Apple extends Mango {}

// console.log(`The tree is alive :smile:`)
// let apTree = new AppleTree(5,20,35, Apple, 1.2)
// while (apTree._healthStatus !== false){
//   apTree.grow()
//   apTree.produceMangoes()
//   apTree.harvest()
//   console.log(`[Year ${apTree.age} Report] Height - ${apTree.height} | Fruits harvested = ${apTree.harvested}`)

// }

// Release 2


// console.log(`The tree is alive :smile:`)
// let mantree = new FruitTree()
// while (mantree._healthStatus !== false){
//   mantree.grow()
//   mantree.produceFruits()
//   mantree.harvest()
//   console.log(`[Year ${mantree.age} Report] Height - ${mantree.height} | Fruits harvested = ${mantree.harvested}`)

// }

const FruitTree = require("./fruitTree.js")
const Fruit = require("./fruit.js")

class PearTree extends FruitTree {

}

class Pear extends Fruit{

}

console.log(`The tree is alive :smile:`)
let pearTree = new PearTree(5,20,35, Apple, 1.2)
while (pearTree._healthStatus !== false){
  pearTree.grow()
  pearTree.produceFruits()
  pearTree.harvest()
  console.log(`[Year ${pearTree.age} Report] Height - ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)

}

