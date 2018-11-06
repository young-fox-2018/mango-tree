"use strict"

const FruitTree = require('./FruitTree')
const Pear = require('./Mango')

class PearTree extends FruitTree {
    constructor(age, height, healthStatus, stopGrowingAge, deadAge, matureAge) {
        super(age, height, healthStatus, stopGrowingAge, deadAge, matureAge)
    }
    
    getFruit() {
        return new Pear()
    }
}

module.exports = PearTree