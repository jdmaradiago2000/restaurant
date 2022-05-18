const express = require('express');

//Middlewares
const { mealsExists } = require('../middlewares/meals.middlewares');
const {
  protectToken,
  protectAdmin,
} = require('../middlewares/users.middlewares');
const {
  createMealsValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

//Controllers
const {
  createMeal,
  getAllMeals,
  getMealById,
  updateMealById,
  deleteMeal,
} = require('../controllers/meals.controller');

const router = express.Router();
router.use(protectToken);
router.get('/', getAllMeals);

router.post(
  '/:restaurantId',
  createMealsValidations,
  checkValidations,
  createMeal
);

router.get('/:id', mealsExists, getMealById);
router.patch('/:id', protectAdmin, mealsExists, updateMealById);
router.delete('/:id', protectAdmin, mealsExists, deleteMeal);

module.exports = { mealsRouter: router };
