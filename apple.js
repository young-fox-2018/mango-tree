class Apple {
  // Produce a fruit
  constructor () {
    this._quality = this.randomQuality()
  }
  randomQuality(){
    let value = null
    value = Math.round(Math.random())
    if (value === 0) return 'bad'
    else return 'good'
  }

  get quality() {
    return this._quality
  }
}

module.exports = Apple
