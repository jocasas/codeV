/**
 * @name Python
 * @type Unitario
 * @author josepablo
 * Este test unitario comprueba que el compilador en el server.js retorna el codigo que se envia
 * @param {any} 'supertest'
 * @returns {any}
 */
const request = require('supertest')
const app = require('../server')
let server = new app();
describe('Get API', () => {
  it('should get response back', async () => {
    const res = await request(server.app)
      .post('/api')
      .send({
        code:'print("holamundo")'
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('result')
    expect(res.body.result).toBe('holamundo\r\n')
  })
})