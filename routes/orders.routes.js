const express = require('express');

//Middlewares
const { orderExists } = require('../middlewares/orders.middelwares');
const { protectToken } = require('../middlewares/users.middlewares');
const { mealsExists } = require('../middlewares/meals.middlewares');

//Controller
const {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
} = require('../controllers/orders.controller');

const router = express.Router();

router.use(protectToken);

router.post('/', createOrder);
router.get('/me', getAllOrders);
router.patch('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = { ordersRouter: router };
