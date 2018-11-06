"use strict"

const FruitTree = require('./FruitTree')
const Fruit = require('./Fruit')

const MangoTree = require('./MangoTree')
const PearTree = require('./PearTree')
const AppleTree = require('./AppleTree')

// Mango

let mangoTree = new MangoTree()
do {
    mangoTree.grow();
    mangoTree.produceFruits();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report ] Height = ${mangoTree.height} cm | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)


// Apple
let appleTree = new AppleTree()

do {
    appleTree.grow();
    appleTree.produceFruits();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report ] Height = ${appleTree.height} cm | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)


// Pear
let pearTree = new PearTree()
do {
    pearTree.grow();
    pearTree.produceFruits();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report ] Height = ${pearTree.height} cm | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)

