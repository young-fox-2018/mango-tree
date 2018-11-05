"use strict"
const fruit_Tree = require('./Fruit_Tree')
const fruit = require('./Fruit')

// Release 0

class MangoTree extends fruit_Tree{

  // Initialize a new MangoTree
  constructor () {
    super()
    this._fruitful = 2
    this._matured = 16  
    this._dead = 20
  }

  // Get current states here
  // Produce some mangoes
  produceMangoes () { 
    this.harvested = Math.round(Math.random() * 20)

    if(this.age >= this.fruitful){
      for(let i = 0 ; i < this.harvested; i++){
        let mango = new Mango ()
        this.fruits.push(mango)
      }
    }
    
  }

  // Get some fruits
  harvest () {
    this.goodMango = 0
    this.badMango = 0
    for(let iMangoes = 0 ; iMangoes < this.fruits.length ; iMangoes++){
      // console.log(this.fruits[iMangoes], "ini OBJECT MANGOES")
      if(this.fruits[iMangoes].quality === "good"){
        this.goodMango++
      }
      else{
        this.badMango++
      }
    }
    this.fruits = []
  }
}

class Mango extends fruit{
  // Produce a mango
  constructor () {
    super()
  }
}

//   driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested this year= ${mangoTree.harvested}, good: ${mangoTree.goodMango}, bad: ${mangoTree.badMango}`)
   } while (mangoTree.healthStatus != false)