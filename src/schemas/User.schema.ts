import Joi from 'joi';

export const User = Joi.array().items(
  Joi.object().keys({
    _id: Joi.string().allow('', null).label('ID'),
    azure: Joi.object()
      .allow('', null)
      .keys({
        azureEmail: Joi.string().email().allow('', null).label('Azure Email'),
        azureAuthToken: Joi.string().allow('', null).label('Azure Auth Token')
      })
      .label('Azure'),
    customerId: Joi.number().integer().allow('', null).label('Customer ID'),
    deleted: Joi.boolean().valid(false).allow('', null).label('Deleted'),
    id: Joi.number().integer().allow('', null).label('User ID'),
    jira: Joi.object().keys({
      jiraUserId: Joi.string().allow('', null).label('Jira User ID'),
      jiraUserName: Joi.string()
        .email()
        .allow('', null)
        .label('Jira User Email/Username'),
      jiraAuthToken: Joi.string().allow('', null).label('Jira Auth Token')
    }),
    projectId: Joi.number().integer().allow('', null).label('Project ID'),
    active: Joi.boolean().allow('', null).label('Active'),
    code: Joi.string().allow('', null).label('Code'),
    createdAt: Joi.date().iso().allow('', null).label('Created At'),
    createdBy: Joi.number().allow('', null).label('Created By'),
    email: Joi.string().email().allow('', null).label('Email'),
    name: Joi.string().allow('', null).label('Name'),
    password: Joi.string().allow('', null).label('Password'),
    passwordChangedOn: Joi.date()
      .iso()
      .allow('', null)
      .label('Password Changed On'),
    status: Joi.string().allow('', null).label('Status'),
    userType: Joi.array()
      .items(Joi.string().allow('non-admin', 'admin'))
      .allow('', null)
      .label('User Type'),
    username: Joi.string().allow('', null).label('Username'),
    setupPasswordAccessToken: Joi.string()
      .allow('')
      .allow('', null)
      .label('Setup Password Access Token'),
    oldPasswords: Joi.array()
      .items(
        Joi.object().keys({
          password: Joi.string().allow('', null).label('Old Password'),
          updateOn: Joi.date().iso().allow('', null).label('Update On')
        })
      )
      .allow('', null)
      .label('Old Passwords'),
    agentToken: Joi.string().allow('', null).label('Agent Token'),
    projects: Joi.array()
      .items(
        Joi.object().keys({
          _id: Joi.string().allow('', null).label('OID'),
          customerId: Joi.number()
            .integer()
            .allow('', null)
            .label('Customer ID'),
          projectId: Joi.number().integer().allow('', null).label('Project ID'),
          userId: Joi.number().integer().allow('', null).label('User ID'),
          deleted: Joi.boolean().valid(false).allow('', null).label('Deleted'),
          roleId: Joi.number().integer().allow('', null).label('Role ID'),
          createdAt: Joi.date().iso().allow('', null).label('Created At')
        })
      )
      .allow('', null)
      .label('Projects'),
    removedProjects: Joi.array()
      .items()
      .allow('', null)
      .label('Removed Projects'),
    forgotPasswordAccessToken: Joi.string()
      .allow('')
      .allow('', null)
      .label('Forgot Password Access Token'),
    updatedAt: Joi.date().iso().allow('', null).label('Updated At'),
    updatedBy: Joi.number().allow('', null).label('Updated By'),
    profileOriginalName: Joi.string().allow('', null).label('Updated At'),
    profileSize: Joi.number().allow('', null).label('Profile Size'),
    profileUrl: Joi.string().allow('', null).label('Profile URL')
  })
);
