const request = require('supertest')
const app = require('../../src/server').listen()

describe('/random', async () => {
  test('should match regex', async () => {
    const response = await request(app).get('/random')
    const { number }  = JSON.parse(response.text)
    // expect(number).toBe(200)
    expect(number).toBeLessThanOrEqual(10)
  })
})
