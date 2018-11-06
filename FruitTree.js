"use strict"

let Fruit = require("./Fruit.js")

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
        this.height += Math.random()
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
          this.fruits.push(this.getFruit())
        }
      }
      // console.log(this.fruits)
  }

  getFruit() {
    return new Fruit()
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
    this.harvested = `${this.fruits.length} (${countGood} good, ${countBad} bad)`
  }

}

module.exports = FruitTree


  