import * as task_obj from 'azure-pipelines-task-lib';
import { logger } from './utils/logger';
import { ExecutionService } from './services';
import { Execution } from './models';

import dotenv from 'dotenv';
dotenv.config();

let PIPELINEID: number;
let APIURL: string;
let APIKEY: string;
let THRESHOLD: number;
let VERBOSE: boolean;

async function printStatus(execObj: Execution) {
  try {
    logger.info(
      `EXECUTION ID: ${execObj.id} \t| EXECUTION STATUS: ${execObj.status || 'N/A'} \t| EXECUTION RESULT: ${execObj.result || 'N/A'}`
    );
    logger.info(
      `PARENT ID: ${execObj.executionTypeCode} \t| PARENT NAME: ${execObj.executionTypeName} \t| PARENT TYPE: ${execObj.type}`
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

// async function gracefulShutdown({
//   execObj,
//   resultFlag,
//   issueFlag,
// }: {
//   execObj: Execution;
//   resultFlag: boolean;
//   issueFlag: boolean;
// }): Promise<void> {
//   // Updating Status
//   execObj = new Execution(
//     await ExecutionService.ExecutionStart({
//       apiUrl: APIURL,
//       apiKey: APIKEY,
//       pipelineId: PIPELINEID,
//     }),
//   );
// }

async function run() {
  logger.info(
    '**************************************  SIMPLIFYQA PIPELINE EXECUTOR  **************************************\n'
  );
  let execObj: Execution | null = null;

  PIPELINEID = parseInt(task_obj.getInputRequired('PIPELINEID'));
  APIURL = task_obj.getInputRequired('APIURL');
  APIKEY = task_obj.getInputRequired('APIKEY');
  THRESHOLD = parseFloat(task_obj.getInputRequired('THRESHOLD'));
  VERBOSE = task_obj.getBoolInput('VERBOSE', false);

  logger.info(`The Set Parameters are:\n`);
  logger.info(`PIPELINEID: ${PIPELINEID}`);
  logger.info(`API URL: ${APIURL}`);
  const maskedApiKey = `${APIKEY.slice(0, 15)}${'*'.repeat(APIKEY.length - 10)}${APIKEY.slice(-10)}`;
  logger.info(`API KEY: ${maskedApiKey}`);
  logger.info(`THRESHOLD: ${THRESHOLD}`);
  logger.info(`VERBOSE: ${VERBOSE}\n\n`);

  let response = null;
  while (null === response)
    response = await ExecutionService.ExecutionStart(PIPELINEID);

  execObj = new Execution(response.data);

  while ('INPROGRESS' === execObj.status.toLocaleUpperCase()) {
    response = await ExecutionService.ExecutionStatus(
      execObj.projectId,
      execObj.id
    );

    if (null === response)
      if (0 > execObj.testcases.length) {
      }
  }
}

run();
