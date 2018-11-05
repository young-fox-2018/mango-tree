"use strict"

const Trees = require('./trees.js')
const Apple = require('./apple.js')


class AppleTree extends Trees {

    // Initialize a new AppleTree
    constructor(matureAge, stopGrow, deadAge) {
        super(matureAge, stopGrow, deadAge)
    }

    getFruit() {
        return new Apple()
    }
}

module.exports = AppleTree





