let FruitTree = require("./FruitTree.js")
let Fruit = require("./Fruit.js")

class AppleTree extends FruitTree{

    getFruit() {
      return new Apple()
    }
}

class Apple extends Fruit{}


module.exports = AppleTree