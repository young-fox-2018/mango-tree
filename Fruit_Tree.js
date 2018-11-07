// Release 2

const Fruit = require('./Fruit')

class FruitTree {
    constructor(){
        this._age = 0
        this._height = 0
        this._fruits = []
        this._harvested = 0
        this._healthStatus = true
        this._fruitful = 1
        this._matured = 14  
        this._dead = 25
    }
    
    get fruitful () {
        return this._fruitful
    }

    get matured () {
        return this._matured
    }

    get dead () {
        return this._dead
    }

    get age () {
        return this._age
    }

    set age (input) {
        this._age = input
    }

    get height () {
        return this._height
    }

    set height (input) {
        this._height = input
    }

    get fruits () {
        return this._fruits
    }

    set fruits (input) {
        this._fruits = input
    }

    get harvested () {
        return this._harvested
    }

    set harvested (input) {
        this._harvested = input
    }

    get healthStatus () {
        return this._healthStatus
    }

    set healthStatus (input) {
        this._healthStatus = input
    }

    produceFruit (input) { 
        this.harvested = Math.round(Math.random() * 20)

        if(this.age >= this.fruitful){
            for(let i = 0 ; i < this.harvested; i++){
                if (!input) {
                    this.fruits.push(this.getFruit())
                } else {
                    this.fruits.push(input)
                }
            }
        }        
    }

    getFruit(){
        return new Fruit()
    }


      // Grow the tree
    grow () {
        this.age++
        if(this.age >= this.dead){
            this.healthStatus = false
        }
        else{
          if(this.age >= this.matured){
            this.height += 0
          }
          else{
            this.height += Math.random()
          }
        }
    }
    
    harvest () {
        let good = 0
        let bad = 0
        for(let iFruits = 0 ; iFruits < this.fruits.length ; iFruits++){
          if(this.fruits[iFruits].quality === "good"){
            good++
          }
          else{
            bad++
          }
        }
        this.fruits = []
      }
}

module.exports = FruitTree