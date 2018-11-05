const FruitTree = require("/home/aandroomeedaa/Desktop/hacktiv8/PHASE-1/WEEK-2/day-1/mango-tree/mango_tree.js")
const Fruit = require('/home/aandroomeedaa/Desktop/hacktiv8/PHASE-1/WEEK-2/day-1/mango-tree/fruit.js')
class MangoTree extends FruitTree {
  constructor() {
    super(5, 25, 'Mango', 25, true);
    this._maxAge = 17;
  }
}

class Mango extends Fruit {
}


let mangoTree = new MangoTree();

console.log(`The ${mangoTree._fruitName} tree is alive! :Cheerss:\n`);
  do {
    mangoTree.grow();
    mangoTree.produceFruits();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  }
while (mangoTree.healthStatus != false);
console.log(`\nThe ${mangoTree._fruitName} tree has met its end. :sad:\n`);


// module.exports = MangoTree
