import Joi from 'joi';

export const schemaReviews = Joi.object({
  year: Joi.number()
    .required()
    .messages({
      'any.required': 'year required',
    }),
  customerId: Joi.number()
    .required()
    .messages({
      'any.required': 'customerId required',
    }),
  result: Joi.number()
    .required()
    .messages({
      'any.required': 'result required',
    }),
});
