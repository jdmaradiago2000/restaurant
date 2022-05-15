const { Order } = require('../models/order.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const orderExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const order = await Order.findOne({ where: { id, status: 'active' } });

  if (!order) {
    return next(new AppError('Comment not found with given id', 404));
  }

  req.order = order;

  next();
});

module.exports = { orderExists };
