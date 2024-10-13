import Joi from 'joi';

export const ApiCreds = Joi.object().keys({
  apiUrl: Joi.string().disallow('', null).required().label('API URL'),
  apiKey: Joi.string().disallow('', null).required().label('API Key')
});
