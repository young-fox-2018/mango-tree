const FruitTree = require("./fruit_tree")
const Mango = require("./mango")

class MangoTree extends FruitTree {
    constructor(matureAge, ageStopGrow, deadAge) {
        super(matureAge, ageStopGrow, deadAge)
        this._fruit = new Mango()
    }
}


module.exports = MangoTree