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

const createMeals = catchAsync(async (req, res, next) => {
  const { name, price } = req.body;
  const { restaurantId } = req.params;

  const newMeal = await Meal.create({ name, price, restaurantId });

  res.status(201).json({ newMeal });
});

const getMealtById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findOne({ where: { id } });

  res.status(200).json({
    post,
  });
});

const updateMealsById = catchAsync(async (req, res, next) => {
  res.status(200).json({ status: 'success' });
});

const deleteMeals = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
});

module.exports = {
  createMeals,
  getAllMeals,
  getMealtById,
  updateMealsById,
  deleteMeals,
};
