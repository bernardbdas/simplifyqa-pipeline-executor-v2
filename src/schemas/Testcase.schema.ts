import Joi from 'joi';

export const Testcase = Joi.array().items(
  Joi.object().keys({
    deleted: Joi.boolean().allow('', null).label('Deleted'),
    id: Joi.number().allow('', null).label('ID'),
    projectId: Joi.number().allow('', null).label('Project ID'),
    code: Joi.string().allow('', null).label('Code'),
    copiedFromTcId: Joi.number().allow('', null).label('Copied From TC ID'),
    createdAt: Joi.date().iso().allow('', null).label('Created At'),
    createdBy: Joi.number().allow('', null).label('Created By'),
    customFields: Joi.object().allow('', null).label('Custom Fields'),
    defectId: Joi.array()
      .items(Joi.number())
      .allow('', null)
      .label('Defect ID'),
    description: Joi.string().valid('').allow('', null).label('Description'),
    executionType: Joi.string()
      .valid('AUTOMATION')
      .allow('', null)
      .label('Execution Type'),
    mailersList: Joi.any().allow('', null).label('Mailers List'),
    moduleId: Joi.number().allow('', null).label('Module ID'),
    name: Joi.string().allow('', null).label('Name'),
    obsolete: Joi.boolean().allow('', null).label('Obsolete'),
    prerequisite: Joi.string()
      .valid('', null)
      .allow('', null)
      .label('Prerequisite'),
    reviewApproveStatus: Joi.string()
      .valid('', null)
      .allow('', null)
      .label('Review Approve Status'),
    suiteId: Joi.array().items(Joi.number()).allow('', null).label('Suite ID'),
    tags: Joi.array().items(Joi.string()).allow('', null).label('Tags'),
    tcType: Joi.string().valid('ANDROID').allow('', null).label('TC Type'),
    updateVersion: Joi.number().allow('', null).label('Update Version'),
    userstoryId: Joi.number().allow('', null).label('User Story ID'),
    updatedAt: Joi.date().iso().allow('', null).label('Updated At'),
    updatedBy: Joi.number().allow('', null).label('Updated By'),
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
    versions: Joi.array()
      .items(
        Joi.object().keys({
          _id: Joi.string().allow('', null).label('ID'),
          customerId: Joi.number().allow('', null).label('Customer ID'),
          deleted: Joi.boolean().allow('', null).label('Deleted'),
          id: Joi.string().allow('', null).label('Version ID'),
          projectId: Joi.number().allow('', null).label('Project ID'),
          createdAt: Joi.date().iso().allow('', null).label('Created At'),
          createdBy: Joi.number().allow('', null).label('Created By'),
          executionType: Joi.string()
            .valid('AUTOMATION')
            .allow('', null)
            .label('Execution Type'),
          name: Joi.string().allow('', null).label('Version Name'),
          parentId: Joi.number().allow('', null).label('Parent ID'),
          parentType: Joi.string()
            .valid('TC')
            .allow('', null)
            .label('Parent Type'),
          syncONOFF: Joi.string()
            .valid('', null)
            .allow('', null)
            .label('Sync ON/OFF'),
          updatedAt: Joi.date().iso().allow('', null).label('Updated At'),
          updatedBy: Joi.number().allow('', null).label('Updated By')
        })
      )
      .allow('', null)
      .label('Versions')
  })
);
