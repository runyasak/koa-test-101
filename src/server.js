const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const mongoose = require('mongoose')
mongoose.connect('mongodb://192.168.99.100/test', { useNewUrlParser: true })

const server = new Koa()
const router = new Router()

const productModel = require('./model/product')
router.get('/product', async (ctx, next) => {
  const products = await productModel.find()
  ctx.body = products
})

router.post('/product/stock', async (ctx, next) => {
  // const products = await productModel.find()
  // ctx.body = products
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
