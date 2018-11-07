const Fruit = require('./fruit')

class FruitTree {
    constructor(matureAge, stopGrow, deadAge, heightLimit) {
        this._age = 0
        this._height = 0.012
        this._fruits = []
        this._harvested = ''
        this._healthStatus = true
        this._matureAge = matureAge
        this._stopGrow = stopGrow
        this._deadAge = deadAge
        this._fruit = Fruit
        this._heightLimit = heightLimit
    }

    get age() {
        return this._age
    }

    set age(num) {
        this._age = num
    }
    get height() {
        return this._height
    }

    set height(num) {
        this._height = num
    }

    get fruits() {
        return this._fruits
    }

    set fruits(fruit) {
        this._fruits = fruit
    }

    get healthStatus() {
        return this._healthStatus
    }

    get harvested() {
        return this._harvested
    }

    set harvested(result) {
        this._harvested = result
    }

    get matureAge() {
        return this._matureAge
    }

    get stopGrow() {
        return this._stopGrow
    }

    get deadAge() {
        return this._deadAge
    }
    get fruit() {
        return this._fruit
    }
    get heightLimit() {
        return this._heightLimit
    }

    grow() {
        this.age += 1
        if (this.age < this._stopGrow && this.height < this._heightLimit) {
            this.height += Math.floor(Math.random() * this._heightLimit * 2) / 10
        }
        if (this.age === this.deadAge) {
            this._healthStatus = false
        }

    }

    produceFruits() {
        if (this.age >= this.matureAge) {
            let randomFruits = Math.round(Math.random() * 20) + 1
            for (let i = 0; i < randomFruits; i++) {
                this.fruits.push(new this.fruit())
            }
        }
    }
    harvest() {
        let good = 0
        let bad = 0
        for (let i = 0; i < this.fruits.length; i++) {
            if (this.fruits[i]._quality === `Good`) {
                good++
            } else {
                bad++
            }
        }
        this.harvested = `${this.fruits.length} (${good} good, ${bad} bad)`
        this.fruits = []
    }

}



module.exports = FruitTree