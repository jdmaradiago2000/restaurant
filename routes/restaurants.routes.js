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

const router = express.Router();

router.get('/', getAllActiveRestaurants);
router.get('/:id', restaurantExists, getRestaurantById);

router.use(protectToken);

router.post('/', createRestaurant);
router.patch('/:id', restaurantExists, updateRestaurant);
router.delete('/:id', protectAdmin, restaurantExists, deleteRestaurant);
router.post('/review/:restaurantId', createReviewByRestaurantId);
router.patch('/review/:restaurantId', updateReviewByRestaurantId);
router.delete('/review/:id', deleteReviewByRestaurantId);

module.exports = { restaurantsRouter: router };
