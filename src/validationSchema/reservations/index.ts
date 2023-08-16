import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  customer_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});
