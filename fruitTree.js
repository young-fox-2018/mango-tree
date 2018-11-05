const Fruit = require("./fruit.js")

class FruitTree {
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
      this._fruitName = Fruit
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
    
    // Produce some mangoe
    produceFruits () {
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

  module.exports = FruitTree