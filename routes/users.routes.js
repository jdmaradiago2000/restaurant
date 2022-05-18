const express = require('express');
const { body } = require('express-validator');

// Middlewares
const {
  userExists,
  protectToken,
  protectAdmin,
  protectAccountOwner,
} = require('../middlewares/users.middlewares');

const {
  createUserValidations,
  loginUserValidations,
  createCommentValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

// Controller
const {
  getAllUsers,
  createUser,
  login,
  getUserById,
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

router.get('/', getAllUsers);
router.get('/orders', getAllOrders);
router.get('/orders/:id', getOrderById);
router.get('/:id', userExists, getUserById);
router.patch('/:id', userExists, updateUser);
router.delete('/:id', protectAccountOwner, deleteUser);

router.get('/check-token', checkToken);

module.exports = { usersRouter: router };
