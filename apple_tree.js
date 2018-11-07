const Apple = require('./apple')
const FruitTree = require('./fruit_tree')

class AppleTree extends FruitTree {
    constructor() {
        super()
        this._matureAge = 3
        this._stopGrow = 12
        this._deadAge = 18
        this._heightLimit = 3
        this._fruit = Apple
    }
}



module.exports = AppleTree
