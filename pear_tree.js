const Pear = require('./pear')
const FruitTree = require('./fruit_tree')

class PearTree extends FruitTree {
    constructor() {
        super()
        this._matureAge = 4
        this._stopGrow = 10
        this._deadAge = 17
        this._heightLimit = 4
        this._fruit = Pear
    }
}


module.exports = PearTree
