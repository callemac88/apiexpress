const { config } = require('../config/config'); // tiene las variables de entorni de la conexión

const USER = encodeURIComponent(config.dbUser); // se codifica el user para protegerlo
const PASSWORD = encodeURIComponent(config.dbPassword); // se codifica el password para protegerlo
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; //Se crea la url de conexión para hacerlo mas secillo al pasar las variables de conexión

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres'
  }
}
