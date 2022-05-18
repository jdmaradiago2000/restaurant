// Models
const { Meal } = require('../models/meal.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

const getAllMeals = catchAsync(async (req, res, next) => {
  const meals = await Meal.findAll({
    where: { status: 'active' },
  });

  res.status(200).json({ meals });
});

const createMeal = catchAsync(async (req, res, next) => {
  const { name, price } = req.body;
  const { restaurantId } = req.params;

  const newMeal = await Meal.create({ name, price, restaurantId });

  res.status(201).json({ newMeal });
});

const getMealById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const meal = await Meal.findOne({ where: { id } });

  res.status(200).json({ meal });
});

const updateMealById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const meal = await Meal.findOne({ where: { id } });

  await meal.update({ name, price });

  res.status(200).json({ status: 'success' });
});

const deleteMeal = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const meal = await Meal.findOne({ where: { id } });

  await meal.update({ status: 'deleted' });

  res.status(200).json({
    status: 'success',
  });
});

module.exports = {
  createMeal,
  getAllMeals,
  getMealById,
  updateMealById,
  deleteMeal,
};
