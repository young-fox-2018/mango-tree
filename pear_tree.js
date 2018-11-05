const fruit_Tree = require('./fruit_tree')
const fruit = require('./fruit')

// Release 1
class PearTree extends fruit_Tree{
    // Initialize a new PearTree
    constructor () {
      super()
      this._fruitful = 4
      this._matured = 15  
      this._dead = 30
      this.goodPear = 0
      this.badPear = 0
      this.fruits = []
      this._min = 0
      this._max = 2
    }
  
    // Get current states here
    // Produce some pear
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
      for(let i = 0 ; i < this.fruits.length ; i++){
        if(this.fruits[i].quality === 'good'){
          this.goodPear++
        }
        else{
          this.badPear++
        }
      }
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