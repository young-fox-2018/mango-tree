
  class Fruit {
    // Produce a fruit
    constructor () {
      this._quality = this.randomGoodBad()
    }
    
    randomGoodBad(){
      let quality = Math.round(Math.random())
      
      if(quality == 0) return "bad";
      else return "good";
    }
  }
  
//   console.log(`The tree is alive :smile:`)
//   let mantree = new FruitTree()
//   while (mantree._healthStatus !== false){
//     mantree.grow()
//     mantree.produceFruits()
//     mantree.harvest()
//     console.log(`[Year ${mantree.age} Report] Height - ${mantree.height} | Fruits harvested = ${mantree.harvested}`)
  
//   }

module.exports = Fruit
  