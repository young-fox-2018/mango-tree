const FruitTree = require('./fruit_tree.js')
const Apple = require('./apple.js')

class AppleTree extends FruitTree {
    constructor() {
        super()
        this._matureAge = 5
        this._growAge = 7
        this._deadAge = 10
        this._kindFruit = Apple
        this.minHe = 0
        this._maxHeight = 0.5
        this._minHeight = 0.1
        this._maxFruits = 25
        this._minFruits = 1
    }

}

let appleTree = new AppleTree()
console.log(`The tree is alive!. :smile:`)
do {
    appleTree.grow();
    appleTree.produce();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log(`The tree has met it's end. :sad:`)
