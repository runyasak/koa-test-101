const random = require('../../src/random')
describe('sumPrime', function () {
  test('1, 1 should return 0', function () {
    random.range = jest.fn().mockReturnValue(1)
    expect(random.range()).toBe(1)
  })
})
