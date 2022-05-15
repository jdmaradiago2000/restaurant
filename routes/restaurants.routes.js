const express = require('express');

// Middlewares

const {restaurantExists}= require('../middlewares/restaurantsMiddlewares')

 const { protectToken } = require('../middlewares/usersMiddlewares');

// // Controller
 const {
   getAllRestaurant,
   createRestaurant,
   getRestaurantById,
   updateRestaurant,
   deleteRestaurant,
   createReviewsById,
   updateReviewByRestaurantId,
   desableReviewByRestaurantId
 
 } = require('../controllers/restaurantsController');


const router = express.Router();
router.use(protectToken);

router.route('/').get(getAllRestaurant).post(createRestaurant);

router
.use('/:id', restaurantExists)
.route('/:id')
.get(getRestaurantById)
.patch(updateRestaurant)
.delete(deleteRestaurant);
router.post('/reviews/:id',createReviewsById);
router
.use('/reviews/restauranId/:id',restaurantExists )
.patch(updateReviewByRestaurantId)
.delete(desableReviewByRestaurantId);


module.exports = { restaurantRouter: router };
