const Fruit = require('./Fruits.js')
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
    this.fruits = []
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
    if(this.age >= 2 && this.age <= this._matureAge ) {
      let randomFruits = Math.floor(Math.random() * 20)+5
      for (let i = 0; i < randomFruits; i++) {
        
        this.fruits.push(this.getFruit())
      }
      console.log(this.fruits)
    }
  }
  // Get some fruits
  getFruit() {
      return new Fruit
  }
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

module.exports = Tree