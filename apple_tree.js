const Apple = require('./apple')
const FruitTree = require('./fruit_tree')
class AppleTree extends FruitTree {
    constructor() {
        super()
        this._matureAge = 3
        this._stopGrow = 12
        this._deadAge = 18
        this._fruit = Apple
    }
    // Get current states here

    // Grow the tree
    grow() {
        let heightLimit = 3
        this.age += 1
        if (this.age < this._stopGrow && this.height < heightLimit) {
            this.height += Math.floor(Math.random() * heightLimit * 2) / 10
        }
        if (this.age === this.deadAge) {
            this._healthStatus = false
        }

    }
    produceFruits() {
        if (this.age >= this.matureAge) {
            let randomFruits = Math.round(Math.random() * 20) + 1
            for (let i = 0; i < randomFruits; i++) {
                this.fruits.push(new this._fruit())
            }
        }
    }
    // Get some fruits
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



module.exports = AppleTree
