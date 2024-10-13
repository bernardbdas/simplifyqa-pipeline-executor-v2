import Joi from 'joi';

export const Execution = Joi.array().items(
  Joi.object().keys({
    customerId: Joi.number().allow('', null).label('Customer ID'),
    deleted: Joi.boolean().valid(false).allow('', null).label('Deleted'),
    id: Joi.number().allow('', null).label('Execution ID'),
    projectId: Joi.number().allow('', null).label('Project ID'),
    moduleId: Joi.number().allow('', null).label('Module ID'),
    usestoryId: Joi.number().allow('', null).label('Uses Story ID'),
    tags: Joi.any().allow('', null).label('Tags'),
    agentId: Joi.string()
      .guid({ version: 'uuidv4', separator: '-' })
      .allow('', null)
      .label('Agent ID'),
    authkey: Joi.string().allow('', null).label('Auth Key'),
    childExecution: Joi.boolean().allow('', null).label('Child Execution'),
    cloudType: Joi.string().allow('', null).label('Cloud Type'),
    code: Joi.string().allow('', null).label('Code'),
    createdAt: Joi.date().iso().allow('', null).label('Created At'),
    createdBy: Joi.number().allow('', null).label('Created By'),
    environmentType: Joi.string().allow('', null).label('Environment Type'),
    executionCategory: Joi.string().allow('', null).label('Execution Category'),
    executionOS: Joi.string().allow('', null).label('Execution OS'),
    executionStyle: Joi.string().allow('', null).label('Execution Style'),
    executionTime: Joi.string()
      .allow('')
      .allow('', null)
      .label('Execution Time'),
    executionType: Joi.string().allow('', null).label('Execution Type'),
    executionTypeId: Joi.number().allow('', null).label('Execution Type ID'),
    executionTypeName: Joi.string()
      .allow('', null)
      .label('Execution Type Name'),
    executionTypeCode: Joi.string()
      .allow('', null)
      .label('Execution Type Code'),
    fromAgent: Joi.boolean().allow('', null).label('From Agent'),
    globalConfiguration: Joi.object()
      .allow('', null)
      .label('Global Configuration'),
    iterationId: Joi.number().allow('', null).label('Iteration ID'),
    iterationsSelected: Joi.array()
      .items(Joi.string())
      .allow('', null)
      .label('Iterations Selected'),
    mode: Joi.string().allow('', null).label('Mode'),
    parentExecutionId: Joi.number()
      .allow('', null)
      .label('Parent Execution ID'),
    childExecutions: Joi.array()
      .items(Joi.number().allow('', null).label('Child Execution ID'))
      .allow('', null)
      .label('Child Execution IDs'),
    releaseId: Joi.number().allow('', null).label('Release ID'),
    result: Joi.string().allow('', null).label('Result'),
    status: Joi.string().allow('', null).label('Status'),
    testcases: Joi.array().items(
      Joi.object().keys({
        assignTo: Joi.number().allow('', null).label('Assigned To ID'),
        projectId: Joi.number().allow('', null).label('Project ID'),
        projectName: Joi.string().allow('', null).label('Project Name'),
        testcaseId: Joi.number().allow('', null).label('Test Case ID'),
        testcaseName: Joi.string().allow('', null).label('Test Case Name'),
        testcaseDesc: Joi.string()
          .allow('')
          .allow('', null)
          .label('Test Case Description'),
        versionId: Joi.string()
          .guid({ version: 'uuidv4', separator: '-' })
          .allow('', null)
          .label('Version ID'),
        testcaseSeq: Joi.number().allow('', null).label('Test Case Sequence'),
        stepId: Joi.string().allow('', null).label('Step ID'),
        stepCount: Joi.number().allow('', null).label('Step Count'),
        tcType: Joi.string().allow('', null).label('Test Case Type'),
        platform: Joi.array().items(
          Joi.object().keys({
            id: Joi.string().allow('', null).label('Platform ID'),
            name: Joi.string().allow('', null).label('Platform Name'),
            technologyType: Joi.string()
              .allow('', null)
              .label('Technology Type'),
            type: Joi.string().allow('', null).label('Platform Type'),
            osVersion: Joi.string().allow('', null).label('OS Version')
          })
        ),
        configuration: Joi.object()
          .keys({
            MEDIUM_WAIT: Joi.number().allow('', null),
            MAX_TIME_OUT: Joi.number().allow('', null),
            EXIST_TIME_OUT: Joi.number().allow('', null),
            NOT_EXIST_TIME_OUT: Joi.number().allow('', null),
            MINIMUM_WAIT: Joi.number().allow('', null),
            IF_TIME_OUT: Joi.number().allow('', null),
            LONG_WAIT: Joi.number().allow('', null),
            DOWNLOAD_PATH: Joi.string().allow('', null),
            SUITE_NEW_BROWSER_SESSION: Joi.string().allow('', null),
            SUITE_TERMINATE_ON_FAIL: Joi.string().allow('', null)
          })
          .allow('', null),
        exception: Joi.string().allow('', null).label('Exception'),
        iterationsSelected: Joi.array().items(Joi.string()).allow('', null),
        status: Joi.string().allow('', null),
        agentStartTime: Joi.date().iso().allow('', null),
        agentEndTime: Joi.date().iso().allow('', null),
        createdAt: Joi.date().iso().allow('', null),
        endedAt: Joi.date().iso().allow('', null),
        executionDuration: Joi.string().allow('', null),
        executionType: Joi.string().allow('', null)
      })
    ),
    type: Joi.string().allow('', null),
    userstoryId: Joi.number().allow('', null).label('User Story ID'),
    agentEndTime: Joi.date().iso().allow('', null),
    agentStartTime: Joi.date().iso().allow('', null),
    exception: Joi.any().allow('', null),
    executionDuration: Joi.string().allow('', null)
  })
);
