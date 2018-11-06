let FruitTree = require("./FruitTree.js")
let Fruit = require("./Fruit.js")

class MangoTree extends FruitTree{

    getFruit(quality) {
      return new Mango(quality)
    }
}

class Mango extends Fruit{}


module.exports = MangoTree