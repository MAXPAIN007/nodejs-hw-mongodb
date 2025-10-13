import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().trim().min(3).max(30).required().messages({
    'string.base': 'Name must be a string',
    'string.empty': 'Name is required',
    'string.min': 'Name must be at least {#limit} characters long',
    'string.max': 'Name must be at most {#limit} characters long',
    'any.required': 'Name is required',
  }),

  email: Joi.string().trim().lowercase().email().required().messages({
    'string.base': 'Email must be a string',
    'string.empty': 'Email is required',
    'string.email': 'Email must be a valid email address',
    'any.required': 'Email is required',
  }),

  password: Joi.string().trim().min(6).max(64).required().messages({
    //min /max
    'string.base': 'Password must be a string',
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least {#limit} characters long', //min /max
    'string.max': 'Password must be at most {#limit} characters long', //min /max
    'any.required': 'Password is required',
  }),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().trim().lowercase().email().required().messages({
    'string.email': 'Invalid email address',
    'any.required': 'Email is required',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
  }),
});

export const requestResetEmailSchema = Joi.object({
  email: Joi.string().trim().lowercase().email().required().messages({
    'string.email': 'Invalid email address',
    'any.required': 'Email is required',
  }),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().required(),
  token: Joi.string().required(),
});
