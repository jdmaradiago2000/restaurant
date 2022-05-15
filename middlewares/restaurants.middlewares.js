const { Restaurant } = require('../models/restaurant.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const restaurantExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const restaurant = await Restaurant.findOne({ where: { id, status: 'active' } });

  if (!restaurant) {
    return next(new AppError('Restaurant not found with given id', 404));
  }

  req.restaurant = restaurant;

  next();
});

module.exports = { restaurantExists };
