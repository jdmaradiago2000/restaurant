const express = require('express');

// Middlewares
const { restaurantExists } = require('../middlewares/restaurants.middlewares');
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
router.get('/:id', getRestaurantById);

router.use(protectToken);

router.post('/', createRestaurant);
router.patch('/:id', protectAdmin, updateRestaurant);
router.delete('/:id', protectAdmin, deleteRestaurant);
router.post('/reviews/:id', createReviewByRestaurantId);
router.patch('/reviews/:id', updateReviewByRestaurantId);
router.delete('/reviews/:id', deleteReviewByRestaurantId);

module.exports = { restaurantsRouter: router };
