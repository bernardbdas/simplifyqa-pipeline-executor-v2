import { Execution } from '../models/Execution.model';
import { makeRequest, validateAPICreds, logger } from '../utils';
export class ExecutionService {
  constructor() {}

  static async ExecutionStart(
    pipelineId: number,
    options: { apiUrl?: string; apiKey?: string } = {}
  ): Promise<any | null> {
    const {
      apiUrl = process.env.INPUT_APIURL,
      apiKey = process.env.INPUT_APIKEY
    } = options;

    const url = `${apiUrl}/pl/exec/start/${pipelineId}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: apiKey
    };

    try {
      validateAPICreds({ apiUrl, apiKey });
      const response = await makeRequest({
        method: 'post',
        url,
        headers,
        timeout: 5 * 60 * 1000
      });

      return {
        data: response ? response.data : null,
        status: response ? response.status : null
      };
    } catch (error: any) {
      logger.error('Error in starting the pipeline execution:', error.message);
      return null;
    }
  }

  static async ExecutionStatus(
    projectId: number,
    execId: number,
    options: { apiUrl?: string; apiKey?: string } = {}
  ): Promise<any | null> {
    const {
      apiUrl = process.env.INPUT_APIURL,
      apiKey = process.env.INPUT_APIKEY
    } = options;

    const url = `${apiUrl}/pl/exec/status/${projectId}/${execId}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: apiKey
    };

    try {
      validateAPICreds({ apiUrl, apiKey });
      const response = await makeRequest({ method: 'get', url, headers });

      return {
        data: response ? response.data : null,
        status: response ? response.status : null
      };
    } catch (error: any) {
      logger.error(
        'Error in fetching the status of the pipeline execution:',
        error.message
      );
      return null;
    }
  }

  static async ExecutionStop(
    projectId: number,
    execId: number,
    options: { apiUrl?: string; apiKey?: string } = {}
  ): Promise<any | null> {
    const {
      apiUrl = process.env.INPUT_APIURL,
      apiKey = process.env.INPUT_APIKEY
    } = options;

    const url = `/pl/exec/stop/${projectId}/${execId}`;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: apiKey
    };

    try {
      validateAPICreds({ apiUrl, apiKey });
      const response = await makeRequest({ method: 'patch', url, headers });

      return {
        data: response ? response.data : null,
        status: response ? response.status : null
      };
    } catch (error: any) {
      logger.error('Error in stopping the pipeline execution:', error.message);
      return { data: null, status: null };
    }
  }
}
