import * as task_obj from 'azure-pipelines-task-lib';
// import Execution from '@/models/Execution.model';
import { logger } from '@/utils/logger';
import { stat } from 'fs';

async function gracefulShutdown({
  exec_obj,
  resFlag,
  issues_flag
}: {
  exec_obj: {};
  resFlag: boolean;
  issues_flag: boolean;
}): Promise<void> {}

async function run() {
  console.log(process.env.PIPELINEID);
  console.log(process.env.APIURL);
  console.log(process.env.APIKEY);
  console.log(process.env.THRESHOLD);
  console.log(process.env.VERBOSE);

  let pipelineId: number | string = task_obj.getInputRequired('PIPELINEID');
  let apiUrl: string | undefined = task_obj.getInputRequired('APIURL');
  let apiKey: string = task_obj.getInputRequired('APIKEY');
  let threshold: number | string | undefined =
    task_obj.getInputRequired('THRESHOLD');
  let verbose: boolean | undefined = task_obj.getBoolInput('VERBOSE', false);

  console.log(pipelineId);
  console.log(apiUrl);
  console.log(apiKey);
  console.log(threshold);
  console.log(verbose);
}

run();
