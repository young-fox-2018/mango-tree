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
    if(this._age < 10){
      this._height += (Math.random() * 5)
    }
    if(this._age === 20){
      this._healthStatus = false;
    }
    
  }
  
  // Produce some mangoes
  produceMangoes () {
    if(this._age > 2){
      let fruitSum =  this.RndIntg(0,10)
      
      for (let i = 0; i < fruitSum ; i++){
        let currentFruits = new Mango();
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

console.log(`The tree is alive :smile:`)
let mantree = new MangoTree()
while (mantree._healthStatus !== false){
  mantree.grow()
  mantree.produceMangoes()
  mantree.harvest()
  console.log(`[Year ${mantree.age} Report] Height - ${mantree.height} | Fruits harvested = ${mantree.harvested}`)

}

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
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
