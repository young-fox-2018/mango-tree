const Fruit = require('./fruit')


class FruitTree {
    constructor(matureAge, stopGrow, deadAge) {
        this._age = 0
        this._height = 0.012
        this._fruits = []
        this._harvested = ''
        this._healthStatus = true
        this._matureAge = matureAge
        this._stopGrow = stopGrow
        this._deadAge = deadAge
        this._fruit = Fruit
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

    // Get current states here

}



module.exports = FruitTree