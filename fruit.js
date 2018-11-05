class Fruit {
    constructor(){
        this._quality = this.status() 
    }
    get quality(){
        return this._quality
      }
    
    status(){
        let fruitCondition = ['good', 'bad']
        let random = Math.round(Math.random() * 1)
        return fruitCondition[random]
    }
}

module.exports = Fruit
