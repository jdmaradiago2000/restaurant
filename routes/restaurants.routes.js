const express = require('express');

// Middlewares
const { restaurantExists } = require('../middlewares/restaurants.middlewares');
const { reviewExists } = require('../middlewares/reviews.middlewares');
const {
  protectAdmin,
  protectToken,
} = require('../middlewares/users.middlewares');

// Controller
const {
  getAllActiveRestaurants,
  createRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  createReviewByRestaurantId,
  updateReviewByRestaurantId,
  deleteReviewByRestaurantId,
} = require('../controllers/restaurants.controller');

const {
  createReviewsValidations,
  createRestaurantValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

const router = express.Router();

router.get(
  '/',
  checkValidations,
  createRestaurantValidations,
  getAllActiveRestaurants
);

router.get('/:id', restaurantExists, getRestaurantById);

router.use(protectToken);

router.post(
  '/',
  createRestaurantValidations,
  checkValidations,
  createRestaurant
);

router.patch('/:id', protectAdmin, restaurantExists, updateRestaurant);
router.delete('/:id', protectAdmin, restaurantExists, deleteRestaurant);
router.post('/review/:restaurantId', createReviewByRestaurantId);
router.patch('/review/:reviewId', updateReviewByRestaurantId);
router.delete('/review/:reviewId', reviewExists, deleteReviewByRestaurantId);

module.exports = { restaurantsRouter: router };
