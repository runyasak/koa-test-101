const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:37017/product', { useNewUrlParser: true })

const server = new Koa()
const router = new Router()

const ProductModel = require('./model/product')
router.get('/product', async (ctx, next) => {
  const products = await ProductModel.find()
  ctx.body = products
})

const productStock = require('./productStock')
router.post('/product/stock', async (ctx, next) => {
  const newStock = ctx.request.body
  const product = await ProductModel.findOne({ id: 1 })
  ProductModel.update({ _id: product._id }, {
    $set: { 
      basePrice: productStock.calculateBasePrice(product, newStock),
      stock: productStock.addStockAmount(product, newStock)
    }
  }, (err, tank) => {
    console.log(err || tank)
  })
  ctx.body = 'Success!'
})

const captcha = require('./captcha')
router.get('/captcha', async (ctx, next) => {
  ctx.body = captcha.generate()
})

const random = require('./random')
router.get('/random', async (ctx, next) => {
  ctx.body = {
    number: random.range()
  }
})

server
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())

module.exports = server
