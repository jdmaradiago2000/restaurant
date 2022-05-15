const express = require('express');

const { mealsExists } = require('../middlewares/mealsMiddlewares');
const { protectToken } = require('../middlewares/usersMiddlewares');


const {
    createMeals,
    getAllMeals,
  getMealstById,
  updateMealsById,
  deleteMeals,
} = require('../controllers/mealsController');

const router = express.Router();
router.use(protectToken);

router.route('/').get(getAllMeals)



router
  .use('/:id', mealsExists)
  .route('/:id')
  .post(createMeals)
  .get(getMealstById)
  .patch(updateMealsById)
  .delete(deleteMeals);

module.exports = { mealRouter: router };
