class Fruit {
    constructor () {
        this._quality = this.generateQuality()
    }

    generateQuality(){
        let random = Math.random()
        if(random < 0.5) return "bad"
        else return "good"
    }

    get quality(){
        return this._quality
    }
}

module.exports = Fruit