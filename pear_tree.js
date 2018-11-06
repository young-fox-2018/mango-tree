const Pear = require('./pear')
const FruitTree = require('./fruit_tree')
class PearTree extends FruitTree {
    constructor() {
        super()
        this._matureAge = 4
        this._stopGrow = 10
        this._deadAge = 17
        this._fruit = Pear
    }
    grow() {
        let heightLimit = 4
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
            let randomFruits = Math.round(Math.random() * 18) + 1
            for (let i = 0; i < randomFruits; i++) {
                this.fruits.push(new this._fruit())
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


module.exports = PearTree
