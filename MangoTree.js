const Tree = require('./Tree.js')
const Fruit = require('./Fruits.js')

class MangoTree extends Tree {
  constructor(matureAge,dieAge,name){
    super(matureAge,dieAge)
    this._name = name || 'Mango'
  }
  get name(){
    return this._name
  }
  getFruit() {
    return new Mango
  }
}

class Mango extends Fruit {}

module.exports  = MangoTree

