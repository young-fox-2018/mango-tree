// Release 2
class FruitTree {
    constructor(){
        this._age = 0
        this._height = 0
        this._fruits = []
        this._harvested = 0
        this._healthStatus = true
        this._fruitful = 0
        this._matured = 0  
        this._dead = 0
        this._min = 0
        this._max = 0
    }
    
    get age () {
        return this._age
    }

    set age (input) {
        this._age = input
    }

    get height () {
        return this._height.toFixed(1);
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

    get fruitful () {
        return this._fruitful
    }

    get matured () {
        return this._matured
    }

    get dead () {
        return this._dead
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.random() * (max - min) + min; 
    }

    // Grow the tree
    grow () {
        this.age++
        if(this.age > this.dead){
            this.healthStatus = false
        }
        else{
          if(this.age < this.matured){
            this._height = this._height + this.getRandomInt(this._min, this._max);
          }
          else{
            this._height = this._height
          }
        }
    }    
}

module.exports = FruitTree