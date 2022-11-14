const { Sequelize } = require('sequelize');

const { config } = require('../config/config'); // tiene las variables de entorni de la conexión

const USER = encodeURIComponent(config.dbUser); // se codifica el user para protegerlo
const PASSWORD = encodeURIComponent(config.dbPassword); // se codifica el password para protegerlo
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbHost}/${config.dbName}`; //Se crea la url de conexión para hacerlo mas secillo al pasar las variables de conexión

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

module.exports = sequelize;
