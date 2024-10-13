import Joi from 'joi';

export const StepResult = Joi.array().items(
  Joi.object({
    id: Joi.string().label('id'),
    stepType: Joi.string().required().label('stepType'),
    stepId: Joi.string().required().label('stepId'),
    seq: Joi.number().required().label('seq'),
    reportSeq: Joi.number().required().label('reportSeq'),
    displaySeq: Joi.string().allow(null).label('displaySeq'),
    parentId: Joi.number().required().label('parentId'),
    type: Joi.string().required().label('type'),
    executionId: Joi.number().integer().allow('', null).label('Execution ID'),
    projectId: Joi.number().integer().required().invalid(null),
    customerId: Joi.number().integer().required().invalid(null),
    createdAt: Joi.date().iso().allow('', null).label('Created At'),
    updatedAt: Joi.date().iso().allow('', null).label('Updated At'),
    executionRunId: Joi.string().required().label('executionRunId'),
    deleted: Joi.boolean().valid(false).allow('', null).label('Deleted'),
    attachments: Joi.array(),
    executionType: Joi.string()
      .required()
      .allow('MANUAL', 'AUTOMATION')
      .label('executionType'),
    versionId: Joi.string().required().label('versionId'),
    status: Joi.string()
      .required()
      .valid('PASSED', 'FAILED', 'SKIPPED', 'INFO', '')
      .label('status'),
    functionResult: Joi.object()
      .keys({
        status: Joi.string()
          .required()
          .valid('PASSED', 'FAILED', 'SKIPPED', 'INFO', '')
          .label('status'),
        stepId: Joi.string().required().label('stepId'),
        seq: Joi.number().required().label('seq')
      })
      .allow(null)
      .label('functionResult'),
    functionData: Joi.object()
      .keys({
        functionId: Joi.number().required().allow(null).label('functionId'),
        functionCode: Joi.string().required().allow(null).label('functionCode'),
        functionName: Joi.string().required().allow(null).label('functionName'),
        functionVersionId: Joi.string()
          .required()
          .allow(null)
          .label('fnVersionId'),
        functionVersionName: Joi.string()
          .required()
          .allow(null)
          .label('fnVersionName'),
        iteratorCount: Joi.number()
          .required()
          .allow(null)
          .label('iteratorCount')
      })
      .allow(null)
      .label('functionData'),
    testdata: Joi.array()
      .items(
        Joi.object().keys({
          value: Joi.string().required().allow('').label('value'),
          paramId: Joi.number().required().label('paramId'),
          paramName: Joi.string().required().label('paramName'),
          runtimeKey: Joi.string().required().allow(null).label('runtimeKey'),
          parameterAccessType: Joi.string()
            .required()
            .label('parameterAccessType'),
          parameterDataType: Joi.string().required().label('parameterDataType'),
          protected: Joi.boolean().required().label('protected')
        })
      )
      .allow(null)
      .label('testdata'),
    children: Joi.object().allow(null, '').label('Children'),
    loop: Joi.object()
      .keys({
        loopIteration: Joi.number()
          .required()
          .allow(null)
          .label('loopIteration'),
        iteratorCount: Joi.number()
          .required()
          .allow(null)
          .label('iteratorCount'),
        loopStepType: Joi.string().required().allow(null).label('loopStepType'),
        conditionString: Joi.string()
          .required()
          .allow(null)
          .label('conditionString'),
        evaluatedConditionString: Joi.string()
          .required()
          .allow(null)
          .label('evaluatedConditionString'),
        children: Joi.array()
          .items({
            stepType: Joi.string().required().label('condition'),
            status: Joi.string().required().label('status'),
            testdata: Joi.array()
              .items(
                Joi.object().keys({
                  value: Joi.string().required().allow('').label('value'),
                  paramId: Joi.number().required().label('paramId'),
                  paramName: Joi.string().required().label('paramName'),
                  runtimeKey: Joi.string()
                    .required()
                    .allow(null)
                    .label('runtimeKey'),
                  parameterAccessType: Joi.string()
                    .required()
                    .label('parameterAccessType'),
                  parameterDataType: Joi.string()
                    .required()
                    .label('parameterDataType'),
                  protected: Joi.boolean().required().label('protected')
                })
              )
              .label('testdata'),
            condition: Joi.string()
              .required()
              .allow(null, '')
              .label('condition'),
            operator: Joi.string().required().allow(null, '').label('operator'),
            evaluatedConditionString: Joi.string()
              .required()
              .allow(null)
              .label('evaluatedConditionString'),
            exception: Joi.string().allow(null, '').label('exception')
          })
          .required()
          .allow(null)
          .label('children')
      })
      .allow(null)
      .label('loop'),
    conditions: Joi.object()
      .keys({
        conditionString: Joi.string()
          .required()
          .allow(null)
          .label('conditionString'),
        evaluatedConditionString: Joi.string()
          .required()
          .allow(null)
          .label('evaluatedConditionString'),
        children: Joi.array()
          .items({
            stepType: Joi.string().required().label('condition'),
            status: Joi.string().required().label('status'),
            testdata: Joi.array()
              .items(
                Joi.object().keys({
                  value: Joi.string().required().allow('').label('value'),
                  paramId: Joi.number().required().label('paramId'),
                  paramName: Joi.string().required().label('paramName'),
                  runtimeKey: Joi.string()
                    .required()
                    .allow(null)
                    .label('runtimeKey'),
                  parameterAccessType: Joi.string()
                    .required()
                    .label('parameterAccessType'),
                  parameterDataType: Joi.string()
                    .required()
                    .label('parameterDataType'),
                  protected: Joi.boolean().required().label('protected')
                })
              )
              .label('testdata'),
            condition: Joi.string().required().allow(null).label('condition'),
            operator: Joi.string().required().allow(null, '').label('operator'),
            evaluatedConditionString: Joi.string()
              .required()
              .allow(null)
              .label('evaluatedConditionString'),
            exception: Joi.string().allow(null, '').label('exception')
          })
          .required()
          .allow(null)
          .label('children')
      })
      .allow(null)
      .label('conditions'),
    apiData: Joi.object().allow(null).label('apiData'),
    compareData: Joi.object().allow(null).label('compareData'),
    platform: Joi.object().allow(null).label('platform'),
    actualResult: Joi.string().required().allow(null, '').label('actualResult'),
    expectedResult: Joi.string()
      .required()
      .allow(null, '')
      .label('expectedResult'),
    description: Joi.string().required().allow(null, '').label('description'),
    screenShots: Joi.array().allow(null).label('screenShots'),
    subSteps: Joi.any().allow(null).label('subSteps'),
    defectIds: Joi.array().allow(null).label('defectIds'),
    exception: Joi.string().allow(null, '').label('exception'),
    networkLogs: Joi.any().allow(null).label('networkLogs'),
    executionLogData: Joi.any().allow(null).label('executionLogData')
  })
);
