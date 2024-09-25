import axios from 'axios';

class ExecutionService {
  constructor() {}

  static async ExecutionStart(
    projectId: string,
    id: string
  ): Promise<JSON | null> {
    try {
      const response = await axios.post(`/start/${projectId}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async ExecutionStatus(
    projectId: string,
    execId: string
  ): Promise<JSON | null> {
    try {
      const response = await axios.get(`/status/${projectId}/${execId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async ExecutionStop(
    projectId: string,
    execId: string
  ): Promise<JSON | null> {
    try {
      const response = await axios.patch(`/stop/${projectId}/${execId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
