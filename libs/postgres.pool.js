const { Pool } = require('pg'); //Mantiene las connexiones abiertas para que no se tenga que volver a hacer el proceso de connection
const { config } = require('../config/config'); // tiene las variables de entorno de la conexión
const USER = encodeURIComponent(config.dbUser); // se codifica el user para protegerlo
const PASSWORD = encodeURIComponent(config.dbPassword); // se codifica el password para protegerlo
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`; //Se crea la url de conexión para hacerlo mas secillo al pasar las variables de conexión

const pool = new Pool({ connectionString: URI }); // se hace la conexión

module.exports = pool;

