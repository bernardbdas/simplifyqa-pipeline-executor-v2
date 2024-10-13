import Joi from 'joi';

export const Release = Joi.array().items(
  Joi.object().keys({
    _id: Joi.string().allow('', null).label('ID'),
    customerId: Joi.number().integer().allow('', null).label('Customer ID'),
    deleted: Joi.boolean().valid(false).allow('', null).label('Deleted Flag'),
    id: Joi.number().integer().allow('', null).label('Release ID'),
    actualEffort: Joi.number().allow('', null).label('Actual Effort'),
    actualEndDate: Joi.date().allow('', null).label('Actual End Date'),
    actualStartDate: Joi.date().allow('', null).label('Actual Start Date'),
    code: Joi.string().allow('', null).label('Release Code'),
    createdAt: Joi.date().allow('', null).label('Created At'),
    createdBy: Joi.number().integer().allow('', null).label('Created By'),
    customFields: Joi.object()
      .pattern(Joi.string(), Joi.any())
      .allow('', null)
      .label('Custom Fields'),
    description: Joi.string().allow('').allow('', null).label('Description'),
    estimatedEffort: Joi.number().allow('', null).label('Estimated Effort'),
    name: Joi.string().allow('', null).label('Release Name'),
    ownerIds: Joi.array()
      .items(Joi.number().integer())
      .allow('', null)
      .label('Owner IDs'),
    plannedEndDate: Joi.date().allow('', null).label('Planned End Date'),
    plannedStartDate: Joi.date().allow('', null).label('Planned Start Date'),
    projectIds: Joi.array()
      .items(Joi.number().integer())
      .allow('', null)
      .label('Project IDs'),
    remainingEffort: Joi.number().allow('', null).label('Remaining Effort'),
    state: Joi.string().allow('', null).label('Release State'),
    updatedAt: Joi.date().allow('', null).label('Updated At'),
    updatedBy: Joi.number().integer().allow('', null).label('Updated By')
  })
);
