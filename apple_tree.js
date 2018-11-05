const fruit_Tree = require('./Fruit_Tree')
const fruit = require('./Fruit')

// Release 1
class AppleTree extends fruit_Tree{
    // Initialize a new AppleTree
    constructor () {
      super()
      this._fruitful = 5
      this._matured = 10  
      this._dead = 20
      this.goodApple = 0
      this.badApple = 0
      this.fruits = []
      this._min = 1
      this._max = 2
    }
  
    // Get current states here
    // Produce some apple
    produceApple () { 
      this.harvested = Math.round(Math.random() * 20)
  
      if(this.age >= this.fruitful){
        for(let i = 0 ; i < this.harvested; i++){
          let apple = new Apple ()
          this.fruits.push(apple)
        }
      }     
    }
  
    // Get some fruits
    harvest () {
      for(let i = 0 ; i < this.fruits.length ; i++){
        if(this.fruits[i].quality === 'good'){
          this.goodApple++
        }
        else{
          this.badApple++
        }
      }
    }
  }
  
  class Apple extends fruit{
    // Produce a apple
    constructor () {
      super()
    }
  }
  
  //   driver code untuk release 0
  let appleTree = new AppleTree()
  do {
    appleTree.grow();
    appleTree.produceApple();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested this year = ${appleTree.harvested}, good: ${appleTree.goodApple}, bad: ${appleTree.badApple}`)
  } while (appleTree.healthStatus != false)