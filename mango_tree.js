"use strict"

// Release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvest = ""
    this._health = true
    this._matureAge = 20
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height

  }

  get fruits () {
    this._fruits;
  }

  get healthStatus () {
    return this._health;
  }

  get harvested () {
    return this._harvest
  }

  // Get current states here

  // Grow the tree
  grow () {
    // let matureAge = 20
    if(this._age < this._matureAge){
      this._age++;
    } 
    
    if (this._age === this._matureAge){
      this._health = false;
      // break;
      // return "the tree has met its end!"
    }

    this._height = Math.random();
  }
  
  // Produce some mangoes
  produceFruits () {
    let total = Math.random()*10;

    // if(this._age >= this.matureAge){
      for(let i = 0; i < total; i++){
        this._fruits.push(this.getFruits())
      }
    // }
    return this._fruits
  }

  getFruits(){
    return new Fruit()
  }

  // Get some fruits
  harvest () {
    let good = 0;
    let bad = 0;

    for(let i = 0; i < this._fruits.length; i++){
      // console.log(this._fruits[i].quality)
      if(this._fruits[i].quality === "good"){
        good++
      } else if (this._fruits[i].quality === "bad") {
        bad++
      }
    }
    this._harvest = `${this._fruits.length} (${good} good, ${bad} bad)`
  }
}

class Fruit {
  // Produce a mango
  constructor () {
    this.quality = this.qualityCheck();
  }
  qualityCheck(){
    let arr = ["good", "bad"];
    let random = arr[Math.floor(Math.random() * arr.length)]

    return random
  }
}


// * driver code untuk release 0
// let test = new Fruits()

// console.log(test)
// do {
  //   console.log(mangoTree.grow());
  //   mangoTree.produceFruits();
  //   mangoTree.harvest();
  //   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  // } while (mangoTree.healthStatus != false)
  // console.log("the tree has met its end! Nuuuu :(")
  
  // Release 1
  class MangoTree extends FruitTree {
    constructor(){
      super()
      this._matureAge = 10
      this._dead = 25
      this._typeOfFruit = "Mango"
    }
    getFruits(){
      return new Mango()
    }
  }
  
  class Mango extends Fruit {}
  
  class AppleTree extends FruitTree{
    constructor (){
      super ()
      this._matureAge = 2
      this._dead = 20
      this._typeOfFruit = "Apple"
    }
    getFruits(){
      return new Apple()
    }
  }
  
  class Apple extends Fruit {
    constructor(){
      super()
    }
  }
  
  class PearTree extends FruitTree {
    constructor(){
      super ()
      this._matureAge = 5
      this._dead = 7
      this._typeOfFruit = "Pear"
    }
    getFruits (){
      return new Pear()
    }
  } 
  
  class Pear extends Fruit {
    
  }

//MANGO
let mangoTree = new MangoTree();
do {
    console.log(mangoTree.grow());
    mangoTree.produceFruits();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log("the tree has met its end! Bye bye Mr. Mango")

// APPLE
let appleTree = new AppleTree();
do {
  console.log(appleTree.grow());
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log("the tree has met its end! BYe bye Mr. Apple")

// PEAR
let pearTree = new PearTree();
do {
  console.log(pearTree.grow());
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log("the tree has met its end! Bye bye Mr. Pear")
