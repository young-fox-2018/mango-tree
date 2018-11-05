
const FruitTree = require("./fruit_tree")
const Pear = require("./pear")

class PearTree extends FruitTree {
    constructor(matureAge, ageStopGrow, deadAge) {
        super(matureAge, ageStopGrow, deadAge)
        this._fruit = new Pear()
    }
}


module.exports = PearTree