const sumPrime = require('../../src/sumPrime')
describe('sumPrime', function () {
  test('1, 1 should return 0', function () {
    const want = 0
    const got = sumPrime.sumPrime(1, 1)
    expect(got).toBe(want)
  })
  test('1, 5 should return 10', function () {
    const want = 10
    const got = sumPrime.sumPrime(1, 5)
    expect(got).toBe(want)
  })

  test('1, 10 should return 17', function () {
    const want = 17
    const got = sumPrime.sumPrime(1, 10)
    expect(got).toBe(want)
  })
})
