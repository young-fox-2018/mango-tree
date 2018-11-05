const FruitTree = require("/home/aandroomeedaa/Desktop/hacktiv8/PHASE-1/WEEK-2/day-1/mango-tree/mango_tree.js")
const Fruit = require('/home/aandroomeedaa/Desktop/hacktiv8/PHASE-1/WEEK-2/day-1/mango-tree/fruit.js')
class AppleTree extends FruitTree {
  constructor() {
    super(7, 30, 'Apple', 43, true);
    this._maxAge = 35;
  }
}
class Apple extends Fruit {
}

let appleTree = new AppleTree();

console.log(`The ${appleTree._fruitName} tree is alive! :Cheerss:\n`);
  do {
    appleTree.grow();
    appleTree.produceFruits();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
  }
while (appleTree.healthStatus != false);
console.log(`\nThe ${appleTree._fruitName} tree has met its end. :sad:\n`);
