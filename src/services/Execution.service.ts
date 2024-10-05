import axios, { AxiosResponse } from 'axios';

class ExecutionService {
  constructor() {}

  private static async makeRequest<T>(
    method: 'post' | 'get' | 'patch',
    url: string
  ): Promise<T | null> {
    try {
      const response: AxiosResponse<T> = await axios({ method, url });
      return response.data;
    } catch (error) {
      console.error(`Error during API call to ${url}:`, error);
      return null;
    }
  }

  static async ExecutionStart(
    projectId: string,
    id: string
  ): Promise<any | null> {
    const url = `/start/${projectId}/${id}`;
    return this.makeRequest('post', url);
  }

  static async ExecutionStatus(
    projectId: string,
    execId: string
  ): Promise<any | null> {
    const url = `/status/${projectId}/${execId}`;
    return this.makeRequest('get', url);
  }

  static async ExecutionStop(
    projectId: string,
    execId: string
  ): Promise<any | null> {
    const url = `/stop/${projectId}/${execId}`;
    return this.makeRequest('patch', url);
  }
}

export default ExecutionService;
