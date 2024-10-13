import Joi from 'joi';

export const Suite = Joi.array().items(
  Joi.object().keys({
    _id: Joi.string().allow('', null).label('ID'),
    customerId: Joi.number().allow('', null).label('Customer ID'),
    deleted: Joi.boolean().allow('', null).label('Deleted'),
    id: Joi.number().allow('', null).label('Suite ID'),
    projectId: Joi.number().allow('', null).label('Project ID'),
    autoDefectLog: Joi.boolean().allow('', null).label('Auto Defect Log'),
    autoReExecCount: Joi.number()
      .allow('', null)
      .label('Auto Re-Execute Count'),
    autoReExecTriggerOn: Joi.string()
      .allow('', null)
      .label('Auto Re-Execute Trigger On'),
    code: Joi.string().allow('', null).label('Code'),
    copiedFrom: Joi.object()
      .keys({
        cpId: Joi.any().allow('', null).label('Copied From ID'),
        cpCode: Joi.any().allow('', null).label('Copied From Code')
      })
      .allow('', null)
      .label('Copied From'),
    copyTestData: Joi.any().allow('', null).label('Copy Test Data'),
    createdAt: Joi.date().iso().allow('', null).label('Created At'),
    createdBy: Joi.number().allow('', null).label('Created By'),
    customFields: Joi.object().allow('', null).label('Custom Fields'),
    description: Joi.string()
      .allow('', null)
      .allow('', null)
      .label('Description'),
    mailersList: Joi.object().allow('', null).label('Mailers List'),
    name: Joi.string().allow('', null).label('Name'),
    newBrowserSession: Joi.boolean()
      .allow('', null)
      .label('New Browser Session'),
    state: Joi.string().allow('', null).label('State'),
    suiteType: Joi.string().allow('', null).label('Suite Type'),
    tags: Joi.array().allow('', null).label('Tags'),
    terminateOnFailure: Joi.boolean()
      .allow('', null)
      .label('Terminate On Failure'),
    testCases: Joi.array()
      .items(
        Joi.object().keys({
          testcaseId: Joi.number().allow('', null).label('Test Case ID'),
          code: Joi.string().allow('', null).label('Code'),
          version: Joi.string().allow('', null).label('Version'),
          versionId: Joi.string()
            .guid({ version: 'uuidv4', separator: '-' })
            .allow('', null)
            .label('Version ID'),
          seq: Joi.number().integer().allow('', null).label('Sequence'),
          executionPlatform: Joi.object()
            .keys({
              id: Joi.string().allow('', null).label('Platform ID'),
              name: Joi.string().allow('', null).label('Platform Name'),
              technologyType: Joi.string()
                .valid('WEB', 'IOS', 'API', 'ANDROID')
                .allow('', null)
                .label('Technology Type'),
              type: Joi.string()
                .valid('NONE', 'REAL_DEVICE', 'SIMULATOR')
                .allow('', null)
                .label('Platform Type')
            })
            .allow('', null)
            .label('Execution Platform'),
          tcType: Joi.string()
            .valid('WEB', 'IOS', 'API', 'ANDROID')
            .allow('', null)
            .label('Test Case Type'),
          stepId: Joi.string()
            .guid({ version: 'uuidv4', separator: '-' })
            .allow('', null)
            .label('Step ID'),
          deleted: Joi.boolean().valid(false).allow('', null).label('Deleted')
        })
      )
      .allow('', null)
      .label('Test Cases'),
    updatedAt: Joi.date().iso().allow('', null).label('Updated At'),
    updatedBy: Joi.number().allow('', null).label('Updated By')
  })
);
