import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { logger } from '../utils';

export async function makeRequest<T = unknown>({
  method,
  url,
  headers,
  reqParams,
  reqBody,
  timeout
}: {
  method: 'post' | 'get' | 'patch';
  url: string;
  headers?: Record<string, string>;
  reqParams?: Record<string, any>;
  reqBody?: any;
  timeout?: number;
}): Promise<{ data: T | null; status: number | null }> {
  try {
    const requestConfig: AxiosRequestConfig = {
      method,
      headers,
      url,
      params: { ...reqParams },
      data: { ...reqBody },
      timeout
    };
    const response: any = await axios(requestConfig);
    const verbose: boolean = Boolean(process.env.INPUT_VERBOSE) || false;
    if (verbose) {
      const { authKey, ...resp } = response.data;
      logger.info(`REQUEST URL: ${url}`);
      logger.info(`RESPONSE: ${JSON.stringify(resp)}`);
    }

    return {
      data: response.data,
      status: response.status
    };
  } catch (error) {
    logger.error(`Error during API call to ${url}:`, error);
    return {
      data: null,
      status: null
    };
  }
}
