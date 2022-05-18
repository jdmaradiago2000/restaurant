const express = require('express');

//Middlewares
const { protectToken } = require('../middlewares/users.middlewares');
const { protectAdmin } = require('../middlewares/users.middlewares');

//Controllers
const {
  createMeal,
  getAllMeals,
  getMealById,
  updateMealById,
  deleteMeal,
} = require('../controllers/meals.controller');

const router = express.Router();
router.get('/', getAllMeals);
router.post('/:restaurantId', createMeal);

router.use(protectToken);

router.get('/:id', getMealById);
router.patch('/:id', protectAdmin, updateMealById);
router.delete('/:id', protectAdmin, deleteMeal);

module.exports = { mealsRouter: router };
