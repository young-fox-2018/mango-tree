const Tree = require('./Tree.js')
const Fruit = require('./Fruits.js')

class PearTree extends Tree {
    constructor(matureAge,dieAge,name){
      super(matureAge,dieAge)
      this._name = name || 'Pear'
    }
    get name(){
      return this._name
    }
    getFruit() {
        return new Pear
      }
  }
  
  class Pear extends Fruit {}

  module.exports  = PearTree