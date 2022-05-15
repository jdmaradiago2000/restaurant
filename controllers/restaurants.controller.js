
const { Restaurant } = require('../models/restaurant.model');
const { Review } = require('../models/review.model');
const { catchAsync } = require('../utils/catchAsync');

const getAllRestaurant = catchAsync(async (req, res, next) => {

  const restaurants = await Restaurant.findAll({
  });

  res.status(200).json({
    restaurants,
  });
});

const createRestaurant = catchAsync(async (req, res, next) => {

  const { name, email, password, role } = req.body;

  // INSERT INTO ...
  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    role,
  });

  // Remove password from response
  newUser.password = undefined;

  res.status(201).json({ newRestaurant });
});

const getRestaurantById = catchAsync(async (req, res, next) => {
 
  res.status(200).json({
    post,
  });
});

const updateRestaurant = catchAsync(async (req, res, next) => {
 

  res.status(200).json({ status: 'success' });
});

const deleteRestaurant = catchAsync(async (req, res, next) => {


  res.status(200).json({
    status: 'success',
  });
});
 const createReviewsById = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
});
 const updateReviewByRestaurantId= catchAsync(async (req, res, next) => {


  res.status(200).json({
    status: 'success',
  });
}); 
const desableReviewByRestaurantId = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
});


module.exports = {
  getAllRestaurant,
  createRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  createReviewsById,
  updateReviewByRestaurantId,
  desableReviewByRestaurantId,
};
