import Joi from 'joi';

export const schemaCustomers = Joi.object({
  firstName: Joi.string()
    .required()
    .min(2)
    .max(30)
    .messages({
      'any.required': 'first-name required',
    }),
  lastName: Joi.string()
    .required()
    .min(2)
    .max(30)
    .messages({
      'any.required': 'last-name required',
    }),
});
