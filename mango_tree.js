"use strict"

// Release 0
const MangoTree = require('./MangoTree.js');
const AppleTree = require('./AppleTree.js');
const PearTree = require('./PearTree');

let mango = new MangoTree();

do {
  mango.grow();
  mango.produce();
  mango.harvest();
  console.log(`[Year ${mango.age} Report] Height = ${mango.height} m | Fruits harvested = ${mango.harvested}`) 
} while(mango.healthStatus != false);

console.log(`The mango tree has met its end.`)

// Release 1
// class AppleTree {}
// class Apple {}

let apple = new AppleTree();

do {
  apple.grow();
  apple.produce();
  apple.harvest();
  console.log(`[Year ${apple.age} Report] Height = ${apple.height} m | Fruits harvested = ${apple.harvested}`) 
} while(apple.healthStatus != false);

console.log(`The apple tree has met its end.`)

// Release 2
// class FruitTree {}
// class Fruit {}

let pear = new PearTree();

do {
  pear.grow();
  pear.produce();
  pear.harvest();
  console.log(`[Year ${pear.age} Report] Height = ${pear.height} m | Fruits harvested = ${pear.harvested}`) 
} while(pear.healthStatus != false);

console.log(`The pear tree has met its end.`)