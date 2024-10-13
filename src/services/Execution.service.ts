import { Execution } from '../models/Execution.model';
import { Connection } from '../utils/connection';

export class ExecutionService {
  constructor() {}

  static async ExecutionStart({
    apiUrl,
    apiKey,
    pipelineId,
  }: {
    apiUrl: string;
    apiKey: string;
    pipelineId: number;
  }): Promise<any | null> {
    const url = `${apiUrl}/pl/exec/start/${pipelineId}`;
    const response = await Connection.makeRequest('post', url, {
      Authorization: apiKey,
    });

    return {
      data: response ? response.data : null,
      status: response ? response.status : null,
    };
  }

  static async ExecutionStatus({
    apiUrl,
    apiKey,
    projectId,
    execId,
  }: {
    apiUrl: string;
    apiKey: string;
    projectId: number;
    execId: number;
  }): Promise<any | null> {
    const url = `${apiUrl}/pl/exec/status/${projectId}/${execId}`;
    const response = await Connection.makeRequest('get', url, {
      Authorization: apiKey,
    });

    return {
      data: response ? response.data : null,
      status: response ? response.status : null,
    };
  }

  static async ExecutionStop(
    projectId: string,
    execId: string,
  ): Promise<any | null> {
    const url = `/pl/exec/stop/${projectId}/${execId}`;
    const response = await Connection.makeRequest('patch', url);

    return {
      data: response ? response.data : null,
      status: response ? response.status : null,
    };
  }
}
