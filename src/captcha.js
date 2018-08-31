const random = require('./random')
const result = [
  {
    captcha: '1 + 1',
    answer: '2'
  },
  {
    captcha: '2 + 1',
    answer: '3'
  },
  {
    captcha: '2 * 1',
    answer: '2'
  },
  {
    captcha: '2 * 5',
    answer: '10'
  }
]

module.exports = {
  random () {
    return random.range(0, 3)
  },
  generate () {
    return result[this.random()]
  }
}
