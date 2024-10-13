import { makeRequest, validateAPICreds, logger } from '../utils';
import { ApiCreds, Suite, Testcase } from '../schemas';
import { ValidationOptions } from 'joi';
export class TestManagement {
  constructor() {}

  static async getTestcase(
    id: number,
    projectId: number,
    options: {
      apiUrl?: string;
      apiKey?: string;
    } = {}
  ): Promise<any | null> {
    const {
      apiUrl = process.env.INPUT_APIURL,
      apiKey = process.env.INPUT_APIKEY
    } = options;

    const method = 'get';
    const url = `${apiUrl}/testcase/${id}/${projectId}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: apiKey
    };

    try {
      validateAPICreds({ apiUrl, apiKey });
      const response = await makeRequest({ method, url, headers });
      const data: any = response.data;

      const validationResult = Testcase.validate(data, {
        abortEarly: false,
        stripUnknown: true
      } as ValidationOptions);

      if (validationResult.error) {
        throw new Error(
          validationResult.error.details.map((err) => err.message).join(', ')
        );
      }

      return data[0] || null;
    } catch (error: any) {
      logger.error('Error in getting the testcase object:', error.message);
      return null;
    }
  }

  static async getSuite(
    id: number,
    options: {
      apiUrl?: string;
      apiKey?: string;
    } = {}
  ): Promise<any | null> {
    const {
      apiUrl = process.env.INPUT_APIURL,
      apiKey = process.env.INPUT_APIKEY
    } = options;

    const method = 'get';
    const url = `${apiUrl}/suites/${id}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: apiKey
    };

    try {
      validateAPICreds({ apiUrl, apiKey });
      const response = await makeRequest({ method, url, headers });
      const data: any = response.data;

      const validationResult = Suite.validate(data, {
        abortEarly: false,
        stripUnknown: true
      } as ValidationOptions);

      if (validationResult.error) {
        throw new Error(
          validationResult.error.details.map((err) => err.message).join(', ')
        );
      }

      return data[0] || null;
    } catch (error: any) {
      logger.error('Error in getting the suite object:', error.message);
      return null;
    }
  }
}
