const FruitTree = require('./fruit_tree.js')
const Pear = require('./pear.js')

class PearTree extends FruitTree {
    constructor() {
        super()
        this._matureAge = 5
        this._growAge = 8
        this._deadAge = 8
        this._kindFruit = Pear
        this.minHe = 0
        this._maxHeight = 0.4
        this._minHeight = 0.1
        this._maxFruits = 30
        this._minFruits = 1
    }

}

let pearTree = new PearTree()
console.log(`The tree is alive!. :smile:`)
do {
    pearTree.grow();
    pearTree.produce();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log(`The tree has met it's end. :sad:`)
