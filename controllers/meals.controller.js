const {Meal} = require('../models/meal.model')
const { catchAsync } = require('../utils/catchAsync');

const getAllMeals = catchAsync(async (req, res, next) => {
  res.status(200).json({
    posts,
  });
});

const createMeals = catchAsync(async (req, res, next) => {
  res.status(201).json({ newPost });
});

const getMealstById = catchAsync(async (req, res, next) => {
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
  getMealstById,
  updateMealsById,
  deleteMeals,
};