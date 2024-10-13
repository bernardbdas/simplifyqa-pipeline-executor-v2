import { ValidationOptions } from 'joi';
import { ApiCreds } from '../schemas';

export function validateAPICreds({
  apiUrl,
  apiKey
}: {
  apiUrl: string;
  apiKey: string;
}) {
  const validationResult = ApiCreds.validate({ apiUrl, apiKey }, {
    abortEarly: false,
    stripUnknown: true
  } as ValidationOptions);

  if (validationResult.error) {
    throw new Error(
      validationResult.error.details.map((err) => err.message).join(', ')
    );
  }
}
