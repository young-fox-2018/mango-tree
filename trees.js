const Fruits = require('./fruits.js')

class Trees {

    // Initialize a new Trees
    constructor(matureAge, stopGrow, deadAge) {
        this._age = 0
        this._height = 0
        this._fruits = []
        this._harvested = ''
        this._healthStatus = true
        this._matureAge = matureAge
        this._stopGrow = stopGrow
        this._deadAge = deadAge
    }

    get age() {
        return this._age
    }

    set age(num) {
        this._age += num
    }


    get height() {
        return this._height
    }

    set height(num) {
        this._height += num
    }

    get fruits() {
        return this._fruits
    }


    get healthStatus() {
        return this._healthStatus
    }

    set healthStatus(value) {
        this._healthStatus = value
    }

    get harvested() {
        return this._harvested
    }


    // Get current states here

    // Grow the tree
    grow() {
        this.age = 1
        if (this._age <= this._stopGrow) {
            this.height = Math.round(Math.random())
        }
        if (this._age >= this._deadAge) {
            this.healthStatus = false
        }
    }

    // Produce some Fruits
    produceFruits() {
        if (this._age >= this._matureAge) {
            for (let i = 0; i < this.getRandomInt(10, 20); i++) {
                this._fruits.push(this.getFruit())
            }
        }
    }

    getFruit() {
        return new this.fruit()
    }

    // Get some fruits
    harvest() {
        let good = 0
        let bad = 0
        this._fruits.forEach(fruit => {
            if (fruit.quality === 'good') { good++ }
            else { bad++ }
        });
        this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`
        this._fruits = []
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
}

module.exports = Trees