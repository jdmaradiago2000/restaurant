const express = require('express');

// Middlewares
const {
  userExists,
  protectToken,
  protectAccountOwner,
} = require('../middlewares/users.middlewares');

const {
  createUserValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

// Controller
const {
  createUser,
  login,
  updateUser,
  deleteUser,
  getAllOrders,
  getOrderById,
  checkToken,
} = require('../controllers/users.controller');

const router = express.Router();

router.post('/', createUserValidations, checkValidations, createUser);

router.post('/login', login);

// Apply protectToken middleware
router.use(protectToken);
router.patch('/:id', protectAccountOwner, updateUser);
router.delete('/:id', protectAccountOwner, deleteUser);
router.get('/orders', protectAccountOwner, getAllOrders);
router.get('/orders/:id', protectAccountOwner, getOrderById);

router.get('/check-token', checkToken);

module.exports = { usersRouter: router };
