const { Review } = require('../models/review.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const reviewExists = catchAsync(async (req, res, next) => {
  const { reviewId } = req.params;

  const review = await Review.findOne({
    where: { id: reviewId, status: 'active' },
  });

  if (!review) {
    return next(new AppError('Review not found with given id', 404));
  }

  req.review = review;

  next();
});

module.exports = { reviewExists };
