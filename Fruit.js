class Fruit {
    constructor(){
        this._quality = this.status() 
    }
    get quality(){
        return this._quality
      }
    
    status(){
        let rand = Math.round(Math.random())
        if(rand < 0.5){
          return "good"
        }
        else{
          return "bad"
        }
    }
}

module.exports = Fruit