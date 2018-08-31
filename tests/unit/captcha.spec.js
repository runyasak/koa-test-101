const captcha = require('../../src/captcha')

describe('captcha', function () {
  test('should return captcha', function () {
    captcha.random = jest.fn().mockReturnValue(0)
    expect(captcha.generate()).toEqual({ captcha: '1 + 1', answer: '2' })
  })
})
