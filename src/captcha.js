const random = require('./random')

module.exports = {
  randomFirstNumber () {
    return random.range(0, 100)
  },
  randomSecondNumber () {
    return random.range(0, 100)
  },
  randomOperator () {
    return ['+', '-', '*', '/'][random.range(0, 3)]
  },
  generate () {
    let firstNumber = this.randomFirstNumber()
    let secondNumber = this.randomSecondNumber()
    let operator = this.randomOperator()
    let captcha = `${firstNumber} ${operator} ${secondNumber}`
    return {
      captcha,
      answer: eval(captcha).toString()
    }
  }
}
