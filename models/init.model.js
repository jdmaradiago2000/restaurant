//Establish your models relations inside this function

const { Meal } = require('./meal.model');
const { Order } = require('./order.model');
const { Restaurant } = require('./restaurant.model');
const { Review } = require('./review.model');
const { User } = require('./user.model');

const initModels = () => {
  // 1 User <----> 1 Orders
  User.hasOne(Order);
  Order.belongsTo(User);

  // 1 User <----> M Reviews
  User.hasMany(Review);
  Review.belongsTo(User);

  // 1 Restaurant <----> M Reviews
  Restaurant.hasMany(Review);
  Review.belongsTo(Restaurant);

  // 1 Restaurant <----> M Meals
  Restaurant.hasMany(Meal);
  Meal.belongsTo(Restaurant);

  // 1 Meal <----> M Orders
  Meal.hasOne(Order);
  Order.belongsTo(Meal);
};

module.exports = { initModels };
