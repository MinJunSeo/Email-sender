const { BadRequest } = require('../exceptions');

const validate = ({schema}) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body.receiver);
    next();
  } catch (error) {
    next(BadRequest);
  }
};

module.exports = validate;