const FruitTree = require("/home/aandroomeedaa/Desktop/hacktiv8/PHASE-1/WEEK-2/day-1/mango-tree/mango_tree.js")
const Fruit = require('/home/aandroomeedaa/Desktop/hacktiv8/PHASE-1/WEEK-2/day-1/mango-tree/fruit.js')
class PearTree extends FruitTree {
  constructor() {
    super(2, 10, 'Pear', 3, true);
    this._maxAge = 10;
  }
}
class Pear extends Fruit {
}

let pearTree = new PearTree();
console.log(`The ${pearTree._fruitName} tree is alive! :Cheerss:\n`);
  do {
    pearTree.grow();
    pearTree.produceFruits();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
  }
while (pearTree.healthStatus != false);
console.log(`\nThe ${pearTree._fruitName} tree has met its end. :sad:`);
