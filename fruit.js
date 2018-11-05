class Fruit {
  constructor () {
    this.quality = this.random() % 3 === 0 ? 'Good': 'Bad';
  }

  random() {
    return Math.round(Math.random() * 27)
  }
}

module.exports = Fruit
