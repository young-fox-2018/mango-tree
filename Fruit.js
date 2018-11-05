"use strict"

class Fruit {

    constructor () {
      this.quality = this.Quality()
    }
  
    Quality(){
      let arrQuality = ['bad','good']
      let random = Math.round(Math.random())
      return arrQuality[random]
  
    }

  }


  module.exports = Fruit