const express = require('express');

const productsRouter = require('./products.route');
const homeRouter = require('./home.route');
const usersRouter = require('./users.route');
const categoriesRouter = require('./categories.route');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/',homeRouter);
  router.use('/products',productsRouter);
  router.use('/users',usersRouter);
  router.use('/categories',categoriesRouter);
}

module.exports = routerApi;
