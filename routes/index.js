const express = require('express');

const productsRouter = require('./products.router');
const categoiresRouter = require('./categories.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/categories', categoiresRouter);
    router.use('/users', usersRouter);
}

module.exports = routerApi;
