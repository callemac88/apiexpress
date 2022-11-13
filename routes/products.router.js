const express = require('express');
const ProductsServices = require('../services/product.service');

const router = express.Router();

const service = new ProductsServices();

router.get('/', async (req, res) => {
  const product = await service.find();
  res.json(product);
});

router.get('/filter', async (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
  // if(id === '999') {
  //   res.status(404).json({
  //     message: 'Not found'
  //   });
  // } else {
  //   res.json({
  //     id,
  //     name: 'Product 1',
  //     price: 1000
  //   });
  // }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
  // res.status(201).json({
  //   message: 'created',
  //   data: body
  // });
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (err) {
    res.status(404).json({
      message: err.message
    });
  }

  // res.json({
  //   message: 'update',
  //   data: body,
  //   id
  // });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
