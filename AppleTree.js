
"use strict"

const FruitTree = require('./FruitTree')
const Apple = require('./Apple')

class AppleTree extends FruitTree {
    constructor(age, height, healthStatus, stopGrowingAge, deadAge, matureAge) {
        super(age, height, healthStatus, stopGrowingAge, deadAge, matureAge)
    }

    getFruit() {
        return new Apple()
    }
}

module.exports = AppleTree
