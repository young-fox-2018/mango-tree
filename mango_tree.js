"use strict"

const Trees = require('./trees.js')
const Mango = require('./mango.js')


class MangoTree extends Trees {

  // Initialize a new MangoTree
  constructor(matureAge, stopGrow, deadAge) {
    super(matureAge, stopGrow, deadAge)
  }

  getFruit() {
    return new Mango()
  }
}

module.exports = MangoTree





