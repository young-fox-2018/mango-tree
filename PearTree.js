const FruitTree = require('./FruitTree.js');
const Fruit = require('./Fruit.js');

class PearTree extends FruitTree{

    // Initialize a new MangoTree
    constructor () {
        super()
        this._mature_age = 1,
        this._stop_grow = 5,
        this._die = 5,
        this._min = 1,
        this._max = 2
    } 

    getFruits () {
        return new Pear();
    }
}

class Pear extends Fruit{
    // Produce a pear  
}

module.exports = PearTree;
