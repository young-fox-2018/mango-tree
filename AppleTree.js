const FruitTree = require('./FruitTree.js');
const Fruit = require('./Fruit.js');

class AppleTree extends FruitTree{

    // Initialize a new MangoTree
    constructor () {
        super()
        this._mature_age = 2,
        this._stop_grow = 8,
        this._die = 10,
        this._min = 1,
        this._max = 3
    } 

    getFruits () {
        return new Apple();
    }
}

class Apple extends Fruit {
    // Produce an apple
}

module.exports = AppleTree;
