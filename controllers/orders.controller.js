// Models
const { User } = require('../models/usersModels');
const { Order } = require('../models/order.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');


const createOrder = catchAsync(async (req, res, next) => {
  const { title, content } = req.body;
  const { sessionUser } = req;

  const newOrder = await Order.create({ title, content, userId: sessionUser.id });

  res.status(201).json({ newOrder });
});



const updateOrder = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const order = await Order.findOne({ where: { id } });

  await order.update({ title, content });

  res.status(200).json({ status: 'success' });
});

const deleteOrder = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const order = await Order.findOne({ where: { id } });

  await order.update({ status: 'deleted' });

  res.status(200).json({
    status: 'success',
  });
});

;

const getMyOrder = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;

  const orders = await Order.findAll({
    where: { userId: sessionUser.id, status: 'active' },
    include: [
      {
        model: User,
        attributes: { exclude: ['password'] },
      },
    ],
  });

  res.status(200).json({ orders });
});

module.exports = {
 createOrder,
 getMyOrder,
 updateOrder,
 deleteOrder,
}