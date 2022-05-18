const { body, validationResult } = require('express-validator');

// Utils
const { AppError } = require('../utils/appError');

const createUserValidations = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('email')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('Must be a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
];

const createOrdersValidations = [
  body('quantify').notEmpty().withMessage('Quantify cannot be empty'),
  body('mealId').notEmpty().withMessage('MealId cannot be empty'),
];
const createMealsValidations = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('price').notEmpty().withMessage('Price cannot be empty'),
];
const createReviewsValidations = [
  body('comment').notEmpty().withMessage('Comment cannot be empty'),
  body('rating').notEmpty().withMessage('Rating cannot be empty'),
];
const createRestaurantValidations = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('rating').notEmpty().withMessage('Rating cannot be empty'),
  body('address').notEmpty().withMessage('Address cannot be empty'),
];

const loginUserValidations = [
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
];

const createCommentValidations = [
  body('text').notEmpty().withMessage('Comment cannot be empty'),
];

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const messages = errors.array().map(({ msg }) => msg);

    // [msg, msg, msg] -> 'msg. msg. msg'
    const errorMsg = messages.join('. ');

    return next(new AppError(errorMsg, 400));
  }

  next();
};

module.exports = {
  createUserValidations,
  createOrdersValidations,
  createMealsValidations,
  createReviewsValidations,
  createRestaurantValidations,
  loginUserValidations,
  createCommentValidations,
  checkValidations,
};
