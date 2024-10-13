import Joi from 'joi';

export const TcFnData = Joi.array().items(
  Joi.object().keys({
    customerId: Joi.number().allow('', null).label('Customer ID'),
    deleted: Joi.boolean().valid(false).allow('', null).label('Deleted'),
    id: Joi.string().guid().allow('', null).label('ID'),
    projectId: Joi.number().allow('', null).label('Project ID'),
    createdAt: Joi.date().iso().allow('', null).label('Created At'),
    createdBy: Joi.number().allow('', null).label('Created By'),
    executionType: Joi.string().allow('', null).label('Execution Type'),
    name: Joi.string().allow('', null).label('Name'),
    parentId: Joi.number().allow('', null).label('Parent ID'),
    parentType: Joi.string().allow('', null).label('Parent Type'),
    syncONOFF: Joi.string().allow('').allow('', null).label('Sync ON/OFF'),
    updatedAt: Joi.date().iso().allow('', null).label('Updated At'),
    updatedBy: Joi.number().allow('', null).label('Updated By')
  })
);
