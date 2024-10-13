export enum ExecutionMessages {
  INVALID_EXEC_TOKEN_MSG = 'ERR: The EXEC_TOKEN value is invalid',
  INVALID_ENV_MSG = 'ERR: The APPURL value is invalid. (Resolving to default app url: https://simplifyqa.app)',
  INVALID_THRESHOLD_MSG = 'ERR: The THRESHOLD value is invalid. (Resolving to default threshold: 100%)',
  EXEC_PASS_STATUS_MSG = 'Execution Passed!',
  EXEC_FAIL_STATUS_MSG = 'Execution Failed!',
  EXEC_PASS_WITH_WARN_STATUS_MSG = 'Execution performed successfully with resolved values. Please change the values to avoid future warnings.'
}
