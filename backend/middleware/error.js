const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong Mongodb Id error
  if (err.name == "CastError") {
    const message = `Resouce not found.Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate Email Entered`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT error
  if (err.name == "JsonWebTokenError") {
    const message = `Json Web Token is invalid ,Try again`;
    err = new ErrorHandler(message, 400);
  }
  // JWT Expire Error
  if (err.name == "TokenExpireedError") {
    const message = `Json Web Token is expired ,Try again`;
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    // error:err.stack,
    message: err.message,
    statusCode: err.statusCode,
  });
};
