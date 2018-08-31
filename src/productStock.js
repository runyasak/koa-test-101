module.exports = {
  calculateBasePrice (baseStock, newStock) {
    return ((baseStock.basePrice * baseStock.stock) + (newStock.price * newStock.amount)) / (baseStock.stock + newStock.amount)
  },
  addStockAmount (baseStock, newStock) {
    return baseStock.stock + newStock.amount
  }
}
