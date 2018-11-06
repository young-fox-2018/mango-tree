const Tree = require('./Tree.js')
const Fruit = require('./Fruits.js')

class AppleTree extends Tree {
    constructor(matureAge,dieAge,name){
      super(matureAge,dieAge)
      this._name = name || 'Apple'
    }
    get name(){
      return this._name
    }


    getFruit() {
        return new Apple
      }
  }
  class Apple extends Fruit {}

  module.exports  = AppleTree