"use strict"

const Trees = require('./trees.js')
const Pear = require('./pear.js')


class PearTree extends Trees {

    // Initialize a new PearTree
    constructor(matureAge, stopGrow, deadAge) {
        super(matureAge, stopGrow, deadAge)
    }

    getFruit() {
        return new Pear()
    }

}

module.exports = PearTree





