"use strict"

const FruitTree = require('./FruitTree')
const Mango = require('./Mango')

class MangoTree extends FruitTree {
    constructor(age, height, healthStatus, stopGrowingAge, deadAge, matureAge) {
        super(age, height, healthStatus, stopGrowingAge, deadAge, matureAge)
    }

    getFruit() {
        return new Mango()
    }
}

module.exports = MangoTree