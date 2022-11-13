const { faker } = require('@faker-js/faker');

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
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });


  }

  async findOne(id) {
    const name = this.getTotal();
    return this.products.find((ele) => ele.id === id);
  }

  async update(id, changes) {
    const index = this.products.findIndex(ele => ele.id === id)
    if (index === -1) {
      throw new Error("product not found");
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
      throw new Error("Product not found");
    }
    this.products.splice(index, 1);
    return this.products[index];
  }
}

module.exports = ProductsService;
