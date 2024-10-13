import * as task_obj from 'azure-pipelines-task-lib';
import { logger } from './utils/logger';
import { ExecutionService } from './services/Execution.service';
import { Execution } from './models/Execution.model';
import { log } from 'console';

var PIPELINEID: number;
var APIURL: string;
var APIKEY: string;
var THRESHOLD: number;
var VERBOSE: boolean;

async function printStatus(execObj: Execution) {
  try {
    logger.info(
      `EXECUTION ID: ${execObj.id} \t| EXECUTION STATUS: ${execObj.status || 'N/A'} \t| EXECUTION RESULT: ${execObj.result || 'N/A'}`,
    );
    logger.info(
      `PARENT ID: ${execObj.executionTypeCode} \t| PARENT NAME: ${execObj.executionTypeName} \t| PARENT TYPE: ${execObj.type}`,
    );

    switch (execObj.type.toLocaleUpperCase().trim()) {
      default: {
        break;
      }

      case 'TESTCASE': {
        logger;
        break;
      }

      case 'SUITE': {
        break;
      }

      case 'EXECUTIONPLAN': {
        break;
      }
    }

    if (0 >= execObj.testcases.length) {
      logger.info(`TOTAL TESTCASES: ${execObj.testcases.length}`);
    }
  } catch (e) {}
}

async function gracefulShutdown({
  execObj,
  resultFlag,
  issueFlag,
}: {
  execObj: Execution;
  resultFlag: boolean;
  issueFlag: boolean;
}): Promise<void> {
  // Updating Status
  execObj = new Execution(
    await ExecutionService.ExecutionStart({
      apiUrl: APIURL,
      apiKey: APIKEY,
      pipelineId: PIPELINEID,
    }),
  );
}

async function run() {
  PIPELINEID = parseInt(task_obj.getInputRequired('PIPELINEID'));
  APIURL = task_obj.getInputRequired('APIURL');
  APIKEY = task_obj.getInputRequired('APIKEY');
  THRESHOLD = parseFloat(task_obj.getInputRequired('THRESHOLD'));
  VERBOSE = task_obj.getBoolInput('VERBOSE', false);

  let response = await ExecutionService.ExecutionStart({
    apiUrl: APIURL,
    apiKey: APIKEY,
    pipelineId: PIPELINEID,
  });

  let execObj: Execution = new Execution(response.data);

  while ('INPROGRESS' === execObj.status.toLocaleUpperCase()) {
    let {
      data: { message, data: tcData = null },
      status,
    } = await ExecutionService.ExecutionStatus({
      apiUrl: APIURL,
      apiKey: APIKEY,
      projectId: execObj.projectId,
      execId: execObj.id,
    });

    if (0 > execObj.testcases.length) {
    }
  }
}

run();
