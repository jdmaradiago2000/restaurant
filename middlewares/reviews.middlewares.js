const { Review } = require('../models/reviewsModels');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const reviewExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const review = await Review.findOne({ where: { id, status: 'active' } });

  if (!review) {
    return next(new AppError('Review not found with given id', 404));
  }

  req.review = review;

  next();
});

module.exports = { reviewExists };
