/* eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';
export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51OxAbCSICkT7XED56EmrgPDE1DYgX7i1h43dYELIl6YaoZhyiUv0Is3mKOJ0zKvtFZF6BhOiNimENAvhHsCzYkva00J4DIF758',
  );
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
