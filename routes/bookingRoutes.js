const express = require('express');
const {
  getCheckoutSession,
  createBookingCheckout,
  getAllBookings,
  createBooking,
  getBooking,
  updateBooking,
  deleteBooking,
} = require('../controllers/bookingController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router.use(protect);

router.get('/checkout-session/:tourId', getCheckoutSession);

router.route('/:id').get(getBooking, updateBooking, deleteBooking);

router.route('/').get(getAllBookings).post(createBooking);

module.exports = router;
