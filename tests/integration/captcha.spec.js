const request = require('supertest')
const app = require('../../src/server').listen()

describe('/captcha', async () => {
  test('should match regex', async () => {
    const response = await request(app).get('/captcha')
    const { captcha, answer }  = JSON.parse(response.text)
    expect(eval(captcha).toString()).toBe(answer)
  })
})
