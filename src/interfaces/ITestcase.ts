import { IPlatform } from 'interfaces';

export interface ITestcase {
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
