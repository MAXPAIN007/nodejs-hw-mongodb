import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().trim().min(3).max(20).required().label('Name').messages({
    'string.base': '{#label} should be a string. You entered "{#value}".',
    'string.min':
      '{#label} must have at least {#limit} characters. You entered "{#value}".',
    'string.max':
      '{#label} must have at most {#limit} characters. You entered "{#value}".',
    'any.required': '{#label} is required',
  }),

  phoneNumber: Joi.string()
    .trim()
    .pattern(/^\+?\d{3,20}$/)
    .required()
    .label('Phone number')
    .messages({
      'string.base': '{#label} should be a string. You entered "{#value}".',
      'string.pattern.base':
        '{#label} must contain only digits (optionally starting with "+") and be 3–20 characters long. You entered "{#value}".',
      'any.required': '{#label} is required',
    }),

  email: Joi.string()
    .trim()
    .lowercase()
    .email({
      tlds: { allow: false },
      minDomainSegments: 2,
      allowUnicode: true,
    })
    .label('Email')
    .messages({
      'string.base': '{#label} should be a string. You entered "{#value}".',
      'string.email':
        '{#label} must be a valid email address. You entered "{#value}".',
    }),

  isFavourite: Joi.boolean().default(false).messages({
    'boolean.base': 'isFavourite should be a boolean. You entered "{#value}".',
  }),

  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .default('personal')
    .label('Contact type')
    .messages({
      'string.base': '{#label} should be a string. You entered "{#value}".',
      'any.only': '{#label} must be one of {#valids}. You entered "{#value}".',
      'any.required': '{#label} is required',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().trim().min(3).max(20).label('Name').messages({
    'string.base': '{#label} should be a string. You entered "{#value}".',
    'string.min':
      '{#label} must have at least {#limit} characters. You entered "{#value}".',
    'string.max':
      '{#label} must have at most {#limit} characters. You entered "{#value}".',
  }),

  phoneNumber: Joi.string()
    .trim()
    .pattern(/^\+?\d{3,20}$/)
    .label('Phone number')
    .messages({
      'string.base': '{#label} should be a string. You entered "{#value}".',
      'string.pattern.base':
        '{#label} must contain only digits (optionally starting with "+") and be 3–20 characters long. You entered "{#value}".',
    }),

  email: Joi.string()
    .trim()
    .lowercase()
    .email({
      tlds: { allow: false },
      minDomainSegments: 2,
      allowUnicode: true,
    })
    .label('Email')
    .messages({
      'string.base': '{#label} should be a string. You entered "{#value}".',
      'string.email':
        '{#label} must be a valid email address. You entered "{#value}".',
    }),

  isFavourite: Joi.boolean().default(false).messages({
    'boolean.base': 'isFavourite should be a boolean. You entered "{#value}".',
  }),

  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .label('Contact type')
    .messages({
      'string.base': '{#label} should be a string. You entered "{#value}".',
      'any.only': '{#label} must be one of {#valids}. You entered "{#value}".',
    }),
});
