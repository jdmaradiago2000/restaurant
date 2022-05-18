//Models
const { Restaurant } = require('../models/restaurant.model');
const { Review } = require('../models/review.model');

//Utils
const { catchAsync } = require('../utils/catchAsync');

const getAllActiveRestaurants = catchAsync(async (req, res, next) => {
  const restaurants = await Restaurant.findAll({ where: { status: 'active' } });

  res.status(200).json({
    restaurants,
  });
});

const createRestaurant = catchAsync(async (req, res, next) => {
  const { name, adress, rating } = req.body;

  // INSERT INTO ...
  const newRestaurant = await Restaurant.create({
    name,
    adress,
    rating,
  });

  res.status(201).json({ newRestaurant });
});

const getRestaurantById = catchAsync(async (req, res, next) => {
  const { restaurant } = req;

  res.status(200).json({
    restaurant,
  });
});

const updateRestaurant = catchAsync(async (req, res, next) => {
  const { restaurant } = req;
  const { name, addres } = req.body;

  await restaurant.update({ name, addres });

  res.status(200).json({ status: 'success' });
});

const deleteRestaurant = catchAsync(async (req, res, next) => {
  const { restaurant } = req;

  await restaurant.update({ status: 'deleted' });

  res.status(200).json({
    status: 'success',
  });
});

const createReviewByRestaurantId = catchAsync(async (req, res, next) => {
  const { comment, rating } = req.body;
  const { restaurantId } = req.params;
  const { sessionUser } = req;

  const newReview = await Review.create({
    comment,
    rating,
    restaurantId,
    userId: sessionUser.id,
  });

  res.status(200).json({ newReview });
});

const updateReviewByRestaurantId = catchAsync(async (req, res, next) => {
  const { comment, rating, id } = req.body;
  const { restaurantId } = req.params;

  const review = await Review.findOne({ where: { id: id } });

  console.log(restaurantId);

  await review.update({ comment, rating });

  res.status(200).json({ status: 'success' });
});

const deleteReviewByRestaurantId = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
});

module.exports = {
  getAllActiveRestaurants,
  createRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  createReviewByRestaurantId,
  updateReviewByRestaurantId,
  deleteReviewByRestaurantId,
};
