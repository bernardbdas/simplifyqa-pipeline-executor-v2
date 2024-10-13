import { IPlatform } from '../interfaces/IPlatform';

export interface ITestcase<TestcaseObject = any> {
  testcaseId: number;
  testcaseName: string;
  testcaseDesc: string;
  versionId: string;
  testcaseSeq: number;
  stepId: string;
  stepCount: number;
  tcType: string;
  configuration: {};
  iterationsSelected: string[];
  platform: IPlatform[];
}
