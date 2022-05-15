const express = require('express');

// Middlewares
const { orderExists } = require('../middlewares/ordersMiddelwares');
const { protectToken } = require('../middlewares/usersMiddlewares');

// Controller
const {
 createOrder,
 getMyOrder,
 updateOrder,
 deleteOrder,
} = require('../controllers/ordersController');

const router = express.Router();

router.use(protectToken);

router.route('/').post(createOrder);

router.get('/me', getMyOrder)



router
  .use('/:id', orderExists)
  .route('/:id')
  .patch(updateOrder)
  .delete(deleteOrder);

module.exports = { orderRouter: router };
