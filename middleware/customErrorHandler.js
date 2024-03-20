const { CustomApiError } = require("../errors/customErrorClass");

const customErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: err });
};

module.exports = customErrorHandler;
