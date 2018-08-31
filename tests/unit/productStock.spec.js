const productStock = require('../../src/productStock')

const baseStock = { id: 1, basePrice: 50, stock: 5 }
const newStock = { id: 1, price: 20, amount: 50 }

describe('productStock', function () {
  test(`should get updated basePrice`, function () {
    expect(
      parseInt(productStock.calculateBasePrice(baseStock, newStock))
    ).toEqual(22)
  })
  test(`should get updated stock`, function () {
    expect(
      parseInt(productStock.addStockAmount(baseStock, newStock))
    ).toEqual(55)
  })
})
