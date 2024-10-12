import { ITestcase } from '../interfaces/ITestcase';

export interface IExecution {
  _id: string;
  customerId: number;
  deleted: boolean;
  id: number;
  projectId: number;
  agentId: string;
  authkey: string;
  childExecution: boolean;
  cloudType: string;
  code: string;
  createdAt: string;
  createdBy: number;
  environmentType: string;
  executionCategory: string;
  executionOS: string;
  executionStyle: string;
  executionTime: string;
  executionType: string;
  executionTypeCode: string;
  executionTypeId: number;
  executionTypeName: string;
  fromAgent: boolean;
  globalConfiguration: {};
  iterationId: number;
  iterationsSelected: string[];
  mode: string;
  moduleId: null | number;
  parentExecutionId: null | number;
  releaseId: number;
  result: string;
  status: string;
  tags: null | string[];
  testcases: ITestcase[];
  type: string;
  userstoryId: null | number;
}
