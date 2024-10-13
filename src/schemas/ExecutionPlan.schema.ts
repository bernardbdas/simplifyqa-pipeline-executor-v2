import Joi from 'joi';

export const ExecutionPlan = Joi.object().keys({
  id: Joi.number().integer().allow('', null).label('ID'),
  projectId: Joi.number().integer().allow('', null).label('Project ID'),
  code: Joi.string().allow('', null).label('Code'),
  environmentType: Joi.string().allow('', null).label('Environment Type'),
  iterationId: Joi.number().integer().allow('', null).label('Iteration ID'),
  name: Joi.string().allow('', null).label('Name'),
  plannedEndDate: Joi.date().iso().allow('', null).label('Planned End Date'),
  plannedStartDate: Joi.date()
    .iso()
    .allow('', null)
    .label('Planned Start Date'),
  releaseId: Joi.number().integer().allow('', null).label('Release ID'),
  teamIds: Joi.array()
    .items(Joi.number().integer())
    .allow('', null)
    .label('Team IDs'),
  executionId: Joi.number().integer().allow('', null).label('Execution ID'),
  updatedAt: Joi.date().iso().allow('', null).label('Updated At'),
  updatedBy: Joi.number().allow('', null).label('Updated By')
});
