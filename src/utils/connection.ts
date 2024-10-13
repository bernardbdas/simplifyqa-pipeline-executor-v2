import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export class Connection {
  static async makeRequest<T>(
    method: 'post' | 'get' | 'patch',
    url: string,
    headers?: any,
    reqParams?: any,
    reqBody?: any,
  ): Promise<{ data: T | null; status: number | null }> {
    try {
      const requestConfig: AxiosRequestConfig = {
        method,
        headers,
        url,
        params: { ...reqParams },
        data: { ...reqBody },
      };
      const response: AxiosResponse<T> = await axios(requestConfig);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      console.error(`Error during API call to ${url}:`, error);
      return {
        data: null,
        status: null,
      };
    }
  }
}
