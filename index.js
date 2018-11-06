const MangoTree = require('./mango_tree')
const AppleTree = require('./apple_tree')
const PearTree = require('./pear_tree')

let mangoTree = new MangoTree()
console.log(`==============================Mangoe Tree!=============================`)
do {
    mangoTree.grow();
    mangoTree.produceFruits();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} m| Fruits harvested = ${mangoTree.harvested}`)
    if (!mangoTree.healthStatus) console.log(`The tree has met its end`)
} while (mangoTree.healthStatus != false)

let appleTree = new AppleTree()
console.log(`==============================Apple Tree!=============================`)
do {
    appleTree.grow();
    appleTree.produceFruits();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} m| Fruits harvested = ${appleTree.harvested}`)
    if (!appleTree.healthStatus) console.log(`The tree has met its end`)
} while (appleTree.healthStatus != false)

let pearTree = new PearTree()
console.log(`==============================Pear Tree!=============================`)
do {
    pearTree.grow();
    pearTree.produceFruits();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)} m| Fruits harvested = ${pearTree.harvested}`)
    if (!pearTree.healthStatus) console.log(`The tree has met its end`)
} while (pearTree.healthStatus != false)