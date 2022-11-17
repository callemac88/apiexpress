const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      });
    }
  }

  async create(data) {
    const products = await models.Product.create(data);
    return products;
  }

  async find() {
    const products = await models.Product.findAll();
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id, {
      include: ['category']
    });
    return product;
    // const product = this.products.find((ele) => ele.id === id);
    // if (!product) {
    //   throw boom.notFound('Product not found');
    // }
    // if (product.isBlock) {
    //   throw boom.conflict('Product is block');
    // }
    // return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(ele => ele.id === id)
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(ele => ele.id === id)
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
