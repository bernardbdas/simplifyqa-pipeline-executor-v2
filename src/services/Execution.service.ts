import { Execution } from '../models/Execution.model';
import axios, { AxiosResponse } from 'axios';

export class ExecutionService {
  constructor() {}

  private static async makeRequest<T>(
    method: 'post' | 'get' | 'patch',
    url: string,
    headers?: any
  ): Promise<T | null> {
    try {
      const response: AxiosResponse<T> = await axios({ method, headers, url });
      return response.data;
    } catch (error) {
      console.error(`Error during API call to ${url}:`, error);
      return null;
    }
  }

  static async ExecutionStart({
    apiUrl,
    apiKey,
    pipelineId
  }: {
    apiUrl: string;
    apiKey: string;
    pipelineId: number;
  }): Promise<any | null> {
    const url = `${apiUrl}/pl/exec/start/${pipelineId}`;
    return this.makeRequest('post', url, { Authorization: apiKey });
  }

  static async ExecutionStatus({
    apiUrl,
    apiKey,
    projectId,
    execId
  }: {
    apiUrl: string;
    apiKey: string;
    projectId: number;
    execId: number;
  }): Promise<any | null> {
    const url = `${apiUrl}/pl/exec/status/${projectId}/${execId}`;
    return this.makeRequest('get', url, { Authorization: apiKey });
  }

  static async ExecutionStop(
    projectId: string,
    execId: string
  ): Promise<any | null> {
    const url = `/pl/exec/stop/${projectId}/${execId}`;
    return this.makeRequest('patch', url);
  }
}
