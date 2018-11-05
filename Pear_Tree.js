const fruit_Tree = require('./Fruit_Tree')
const fruit = require('./Fruit')

// Release 1
class PearTree extends fruit_Tree{
    // Initialize a new MangoTree
    constructor () {
      super()
      this._fruitful = 0
      this._matured = 5  
      this._dead = 10
    }
  
    // Get current states here
    // Produce some mangoes
    producePear () { 
      this.harvested = Math.round(Math.random() * 20)
  
      if(this.age >= this.fruitful){
        for(let i = 0 ; i < this.harvested; i++){
          let pear = new Pear ()
          this.fruits.push(pear)
        }
      }     
    }
  
    // Get some fruits
    harvest () {
      this.goodPear = 0
      this.badPear = 0
      for(let iPears = 0 ; iPears < this.fruits.length ; iPears++){
        if(this.fruits[iPears].quality === "good"){
          this.goodPear++
        }
        else{
          this.badPear++
        }
      }
      this.fruits = []
    }
  }
  
  class Pear extends fruit{
    // Produce a pear
    constructor () {
      super()
    }
  }
  
  //   driver code untuk release 0
  let pearTree = new PearTree()
  do {
    pearTree.grow();
    pearTree.producePear();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested this year= ${pearTree.harvested}, good: ${pearTree.goodPear}, bad: ${pearTree.badPear}`)
  } while (pearTree.healthStatus != false)