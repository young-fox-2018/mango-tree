"use strict"


class FruitTree {
    constructor () {
        this._age = 0
        this._height = 0
        this._fruits = []
        this._healthStatus = true
        this._harvested = 0
        // this._typeFruit = ''
        // this._matureAge = 0
        // this._stopHeightAge = 0
        // this._dieAge = 0
    }

    get age () {
        return this._age
    }

    get height () {
        return this._height
    }

    get fruits () {
        return this._fruits
    }
    
    get healthStatus () {
        return this._healthStatus
    }
    
    get harvested () {
        return this._harvested
    }

    get typeFruit () {
        return this._typeFruit
    }

    get matureAge () {
        return this._matureAge
    }

    get stopHeightAge () {
        return this._stopHeightAge
    }

    get dieAge () {
        return this._dieAge
    }

    grow () {

        // console.log(this._age)
        // console.log(this._matureAge, 'mature age')
        this._age += 1
        // if (this._age >= this._matureAge && this._age <= this._dieAge) {
        //     // console.log('true')
        //     this.produceFruits()
        //     this.harvest()
        // } 

        if (this._age <= this._stopHeightAge) {
            this._height  += Math.floor(Math.random() * (3 - 1) + 1)
        }

        if (this._age >= this._dieAge) {
            this._healthStatus = false
        }

        return this
    }


    produceFruits () {
        if (this._age >= this._matureAge && this._age <= this._dieAge) {
            let random = Math.floor(Math.random() * (15 - 3) + 3)
            // console.log('aa')
            this._fruits = []
            for ( let i = 0; i < random; i++) {
                this._fruits.push(new Fruit())
            }
            // console.log(this.fruits)
        }
    }
    
    harvest() {
        let fruits = this._fruits
        let good = 0
        let bad = 0
        // console.log('aaaa')
        for ( let i = 0; i < fruits.length; i++) {
            if (fruits[i].quality === 'bad') {
            bad += 1
            } else {
            good += 1
            }
        }
        this._harvested = `${fruits.length} (${good} good, ${bad} bad)`
        // console.log(this._fruits)
    }

    getFruit() {
        return new Fruit()
    }
}

class Fruit {
    // Produce a mango
    constructor () {
      this.quality = this.Quality()
    }
  
    Quality(){
      let arrQuality = ['bad','good']
      let random = Math.round(Math.random())
      return arrQuality[random]
  
    }

    // getFruit() {
    //     return new Fruit()
    // }
  }

// console.log(new MangoTree.Mango()) 


module.exports = FruitTree