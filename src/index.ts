import * as task_obj from 'azure-pipelines-task-lib';
// import Execution from '@/models/Execution.model';
import { logger } from '@/utils/logger';
import ExecutionService from './services/Execution.service';

var PIPELINEID: number;
var APIURL: string;
var APIKEY: string;
var THRESHOLD: number;
var VERBOSE: boolean;

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
  PIPELINEID = parseInt(task_obj.getInputRequired('PIPELINEID'));
  APIURL = task_obj.getInputRequired('APIURL');
  APIKEY = task_obj.getInputRequired('APIKEY');
  THRESHOLD = parseFloat(task_obj.getInputRequired('THRESHOLD'));
  VERBOSE = task_obj.getBoolInput('VERBOSE', false);

  console.log(
    await ExecutionService.ExecutionStart({
      apiUrl: APIURL,
      apiKey: APIKEY,
      pipelineId: PIPELINEID
    })
  );
}

run();
