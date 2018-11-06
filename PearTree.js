let FruitTree = require("./FruitTree.js")
let Fruit = require("./Fruit.js")

class PearTree extends FruitTree{
    getFruit() {
      return new Pear()
    }
}
class Pear extends Fruit{}

module.exports = PearTree