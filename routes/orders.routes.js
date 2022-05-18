const express = require('express');

//Middlewares
const { orderExists } = require('../middlewares/orders.middelwares');
const {
  protectToken,
  protectAccountOwner,
} = require('../middlewares/users.middlewares');

const {
  createOrdersValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

//Controller
const {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
} = require('../controllers/orders.controller');

const router = express.Router();

router.use(protectToken);

router.post('/', checkValidations, createOrdersValidations, createOrder);
router.get('/me', getAllOrders);
router.patch('/:id', orderExists, updateOrder);
router.delete('/:id', orderExists, deleteOrder);

module.exports = { ordersRouter: router };
