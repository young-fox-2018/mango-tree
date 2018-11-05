const FruitTree = require('./FruitTree.js');
const Fruit = require('./Fruit.js');

class MangoTree extends FruitTree{

    // Initialize a new MangoTree
    constructor () {
        super()
        this._mature_age = 0,
        this._stop_grow = 10,
        this._die = 20,
        this._min = 1,
        this._max = 3
    } 

    getFruits () {
        return new Mango();
    }
}

class Mango extends Fruit{
    // Produce a mango
}

module.exports = MangoTree;
