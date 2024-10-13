import Joi from 'joi';

export const ExecutionRun = Joi.array().items(
  Joi.object().keys({
    id: Joi.string()
      .guid({ version: 'uuidv4', separator: '-' })
      .allow('', null)
      .label('ID'),
    customerId: Joi.number().allow('', null).label('Customer ID'),
    deleted: Joi.boolean().valid(false).allow('', null).label('Deleted'),
    executionId: Joi.number().allow('', null).label('Execution ID'),
    projectId: Joi.number().allow('', null).label('Project ID'),
    tcId: Joi.number().allow('', null).label('Test Case ID'),
    tcType: Joi.string().allow('', null).label('Test Case Type'),
    tcSeq: Joi.number().allow('', null).label('Test Case Sequence'),
    tcVersionId: Joi.string()
      .guid({ version: 'uuidv4', separator: '-' })
      .allow('', null)
      .label('Test Case Version ID'),
    stepId: Joi.string().allow('', null).label('Step ID'),
    tcCode: Joi.string().allow('', null).label('Test Case Code'),
    itr: Joi.number().allow('', null).label('Iteration'),
    itrId: Joi.string().allow('', null).label('Iteration ID'),
    itrName: Joi.string().allow('', null).label('Iteration Name'),
    platformId: Joi.string().allow('', null).label('Platform ID'),
    platform: Joi.object()
      .keys({
        name: Joi.string().allow('', null).label('Platform Name'),
        id: Joi.string().allow('', null).label('Platform ID')
      })
      .allow('', null)
      .label('Platform'),
    status: Joi.string().allow('', null).label('Status'),
    agentEndTime: Joi.date().iso().allow('', null).label('Agent End Time'),
    agentStartTime: Joi.date().iso().allow('', null).label('Agent Start Time'),
    assignTo: Joi.number().allow('', null).label('Assigned To ID'),
    exception: Joi.string().allow('', null).label('Exception'),
    executionDuration: Joi.string().allow('', null).label('Execution Duration')
  })
);
