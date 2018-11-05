
const FruitTree = require("./fruit_tree")
const Apple = require("./apple")

class AppleTree extends FruitTree {
    constructor(matureAge, ageStopGrow, deadAge) {
        super(matureAge, ageStopGrow, deadAge)
    }

    getFruit() {
        return new Apple()
    }
}


module.exports = AppleTree