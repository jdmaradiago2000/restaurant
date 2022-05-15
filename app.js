const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { globalErrorHandler } = require('./controllers/errorsController');

// Controllers
const { globalErrorHandler } = require('./controllers/errors.controller');

// Routers
const { usersRouter } = require('./routes/users.routes');
const { usersRouter } = require('./routes/usersRouters');
const { orderRouter } = require('./routes/orders.routers');
const { restaurantRouter } = require('./routes/restaurants.routes');
const { mealRouter } = require('./routes/meals.routes');


// Init express app
const app = express();

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

// Limit IP requests
const limiter = rateLimit({
  max: 10000,
  windowMs: 1 * 60 * 60 * 1000, // 1 hr
  message: 'Too many requests from this IP',
});

app.use(limiter);

// Endpoints
app.use('/api/v1/users', usersRouter);

// Global error handler
app.use('*', globalErrorHandler);

module.exports = { app };
