const { ValidationError } = require("sequelize");

function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorsHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
  const falso = false;
  if(falso) { next(); }
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errores: err.errores
    });
  }
  next(err);
}


module.exports = { logErrors, errorsHandler, boomErrorHandler, ormErrorHandler }
