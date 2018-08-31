const captcha = require('../../src/captcha')

describe('captcha', function () {
  test(`should generate '10 + 20 = 30'`, function () {
    captcha.randomFirstNumber = jest.fn().mockReturnValue(10)
    captcha.randomSecondNumber = jest.fn().mockReturnValue(20)
    captcha.randomOperator = jest.fn().mockReturnValue('+')
    expect(captcha.generate()).toEqual({ captcha: '10 + 20', answer: '30' })
  })
})
