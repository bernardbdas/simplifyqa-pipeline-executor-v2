import { IExecution } from '@interfaces/IExecution';
import { Testcase } from '@models/Testcase.model';

export class Execution implements IExecution {
  _id: string;
  customerId: number;
  deleted: boolean;
  id: number;
  projectId: number;
  agentId: string;
  authkey: string;
  childExecution: boolean;
  cloudType: string;
  code: string;
  createdAt: string;
  createdBy: number;
  environmentType: string;
  executionCategory: string;
  executionOS: string;
  executionStyle: string;
  executionTime: string;
  executionType: string;
  executionTypeCode: string;
  executionTypeId: number;
  executionTypeName: string;
  fromAgent: boolean;
  globalConfiguration: {};
  iterationId: number;
  iterationsSelected: string[];
  mode: string;
  moduleId: null | number;
  parentExecutionId: null | number;
  releaseId: number;
  result: string;
  status: string;
  tags: null | string[];
  testcases: Testcase[];
  type: string;
  userstoryId: null | number;

  constructor(data: IExecution) {
    this._id = data._id;
    this.customerId = data.customerId;
    this.deleted = data.deleted;
    this.id = data.id;
    this.projectId = data.projectId;
    this.agentId = data.agentId;
    this.authkey = data.authkey;
    this.childExecution = data.childExecution;
    this.cloudType = data.cloudType;
    this.code = data.code;
    this.createdAt = data.createdAt;
    this.createdBy = data.createdBy;
    this.environmentType = data.environmentType;
    this.executionCategory = data.executionCategory;
    this.executionOS = data.executionOS;
    this.executionStyle = data.executionStyle;
    this.executionTime = data.executionTime;
    this.executionType = data.executionType;
    this.executionTypeCode = data.executionTypeCode;
    this.executionTypeId = data.executionTypeId;
    this.executionTypeName = data.executionTypeName;
    this.fromAgent = data.fromAgent;
    this.globalConfiguration = data.globalConfiguration;
    this.iterationId = data.iterationId;
    this.iterationsSelected = data.iterationsSelected;
    this.mode = data.mode;
    this.moduleId = data.moduleId;
    this.parentExecutionId = data.parentExecutionId;
    this.releaseId = data.releaseId;
    this.result = data.result;
    this.status = data.status;
    this.tags = data.tags;
    this.testcases = data.testcases.map((testcase) => new Testcase(testcase));
    this.type = data.type;
    this.userstoryId = data.userstoryId;
  }

  /**
   * Getter _id
   * @return {string}
   */
  public get_id(): string {
    return this._id;
  }

  /**
   * Getter customerId
   * @return {number}
   */
  public getCustomerId(): number {
    return this.customerId;
  }

  /**
   * Getter deleted
   * @return {boolean}
   */
  public getDeleted(): boolean {
    return this.deleted;
  }

  /**
   * Getter id
   * @return {number}
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Getter projectId
   * @return {number}
   */
  public getProjectId(): number {
    return this.projectId;
  }

  /**
   * Getter agentId
   * @return {string}
   */
  public getAgentId(): string {
    return this.agentId;
  }

  /**
   * Getter authkey
   * @return {string}
   */
  public getAuthkey(): string {
    return this.authkey;
  }

  /**
   * Getter childExecution
   * @return {boolean}
   */
  public getChildExecution(): boolean {
    return this.childExecution;
  }

  /**
   * Getter cloudType
   * @return {string}
   */
  public getCloudType(): string {
    return this.cloudType;
  }

  /**
   * Getter code
   * @return {string}
   */
  public getCode(): string {
    return this.code;
  }

  /**
   * Getter createdAt
   * @return {string}
   */
  public getCreatedAt(): string {
    return this.createdAt;
  }

  /**
   * Getter createdBy
   * @return {number}
   */
  public getCreatedBy(): number {
    return this.createdBy;
  }

  /**
   * Getter environmentType
   * @return {string}
   */
  public getEnvironmentType(): string {
    return this.environmentType;
  }

  /**
   * Getter executionCategory
   * @return {string}
   */
  public getExecutionCategory(): string {
    return this.executionCategory;
  }

  /**
   * Getter executionOS
   * @return {string}
   */
  public getExecutionOS(): string {
    return this.executionOS;
  }

  /**
   * Getter executionStyle
   * @return {string}
   */
  public getExecutionStyle(): string {
    return this.executionStyle;
  }

  /**
   * Getter executionTime
   * @return {string}
   */
  public getExecutionTime(): string {
    return this.executionTime;
  }

  /**
   * Getter executionType
   * @return {string}
   */
  public getExecutionType(): string {
    return this.executionType;
  }

  /**
   * Getter executionTypeCode
   * @return {string}
   */
  public getExecutionTypeCode(): string {
    return this.executionTypeCode;
  }

  /**
   * Getter executionTypeId
   * @return {number}
   */
  public getExecutionTypeId(): number {
    return this.executionTypeId;
  }

  /**
   * Getter executionTypeName
   * @return {string}
   */
  public getExecutionTypeName(): string {
    return this.executionTypeName;
  }

  /**
   * Getter fromAgent
   * @return {boolean}
   */
  public getFromAgent(): boolean {
    return this.fromAgent;
  }

  /**
   * Getter globalConfiguration
   * @return {{}}
   */
  public getGlobalConfiguration(): {} {
    return this.globalConfiguration;
  }

  /**
   * Getter iterationId
   * @return {number}
   */
  public getIterationId(): number {
    return this.iterationId;
  }

  /**
   * Getter iterationsSelected
   * @return {string[]}
   */
  public getIterationsSelected(): string[] {
    return this.iterationsSelected;
  }

  /**
   * Getter mode
   * @return {string}
   */
  public getMode(): string {
    return this.mode;
  }

  /**
   * Getter moduleId
   * @return {number | null}
   */
  public getModuleId(): number | null {
    return this.moduleId;
  }

  /**
   * Getter parentExecutionId
   * @return {number | null}
   */
  public getParentExecutionId(): number | null {
    return this.parentExecutionId;
  }

  /**
   * Getter releaseId
   * @return {number}
   */
  public getReleaseId(): number {
    return this.releaseId;
  }

  /**
   * Getter result
   * @return {string}
   */
  public getResult(): string {
    return this.result;
  }

  /**
   * Getter status
   * @return {string}
   */
  public getStatus(): string {
    return this.status;
  }

  /**
   * Getter tags
   * @return {string[] | null}
   */
  public getTags(): string[] | null {
    return this.tags;
  }

  /**
   * Getter testcases
   * @return {Testcase[]}
   */
  public getTestcases(): Testcase[] {
    return this.testcases;
  }

  /**
   * Getter type
   * @return {string}
   */
  public getType(): string {
    return this.type;
  }

  /**
   * Getter userstoryId
   * @return {number | null}
   */
  public getUserstoryId(): null | number {
    return this.userstoryId;
  }

  /**
   * Setter _id
   * @param {string} value
   */
  protected set_id(value: string) {
    this._id = value;
  }

  /**
   * Setter customerId
   * @param {number} value
   */
  protected setCustomerId(value: number) {
    this.customerId = value;
  }

  /**
   * Setter deleted
   * @param {boolean} value
   */
  protected setDeleted(value: boolean) {
    this.deleted = value;
  }

  /**
   * Setter id
   * @param {number} value
   */
  protected setId(value: number) {
    this.id = value;
  }

  /**
   * Setter projectId
   * @param {number} value
   */
  protected setProjectId(value: number) {
    this.projectId = value;
  }

  /**
   * Setter agentId
   * @param {string} value
   */
  protected setAgentId(value: string) {
    this.agentId = value;
  }

  /**
   * Setter authkey
   * @param {string} value
   */
  protected setAuthkey(value: string) {
    this.authkey = value;
  }

  /**
   * Setter childExecution
   * @param {boolean} value
   */
  protected setChildExecution(value: boolean) {
    this.childExecution = value;
  }

  /**
   * Setter cloudType
   * @param {string} value
   */
  protected setCloudType(value: string) {
    this.cloudType = value;
  }

  /**
   * Setter code
   * @param {string} value
   */
  protected setCode(value: string) {
    this.code = value;
  }

  /**
   * Setter createdAt
   * @param {string} value
   */
  protected setCreatedAt(value: string) {
    this.createdAt = value;
  }

  /**
   * Setter createdBy
   * @param {number} value
   */
  protected setCreatedBy(value: number) {
    this.createdBy = value;
  }

  /**
   * Setter environmentType
   * @param {string} value
   */
  protected setEnvironmentType(value: string) {
    this.environmentType = value;
  }

  /**
   * Setter executionCategory
   * @param {string} value
   */
  protected setExecutionCategory(value: string) {
    this.executionCategory = value;
  }

  /**
   * Setter executionOS
   * @param {string} value
   */
  protected setExecutionOS(value: string) {
    this.executionOS = value;
  }

  /**
   * Setter executionStyle
   * @param {string} value
   */
  protected setExecutionStyle(value: string) {
    this.executionStyle = value;
  }

  /**
   * Setter executionTime
   * @param {string} value
   */
  protected setExecutionTime(value: string) {
    this.executionTime = value;
  }

  /**
   * Setter executionType
   * @param {string} value
   */
  protected setExecutionType(value: string) {
    this.executionType = value;
  }

  /**
   * Setter executionTypeCode
   * @param {string} value
   */
  protected setExecutionTypeCode(value: string) {
    this.executionTypeCode = value;
  }

  /**
   * Setter executionTypeId
   * @param {number} value
   */
  protected setExecutionTypeId(value: number) {
    this.executionTypeId = value;
  }

  /**
   * Setter executionTypeName
   * @param {string} value
   */
  protected setExecutionTypeName(value: string) {
    this.executionTypeName = value;
  }

  /**
   * Setter fromAgent
   * @param {boolean} value
   */
  protected setFromAgent(value: boolean) {
    this.fromAgent = value;
  }

  /**
   * Setter globalConfiguration
   * @param {{}} value
   */
  protected setGlobalConfiguration(value: {}) {
    this.globalConfiguration = value;
  }

  /**
   * Setter iterationId
   * @param {number} value
   */
  protected setIterationId(value: number) {
    this.iterationId = value;
  }

  /**
   * Setter iterationsSelected
   * @param {string[]} value
   */
  protected setIterationsSelected(value: string[]) {
    this.iterationsSelected = value;
  }

  /**
   * Setter mode
   * @param {string} value
   */
  protected setMode(value: string) {
    this.mode = value;
  }

  /**
   * Setter moduleId
   * @param {null } value
   */
  protected setModuleId(value: null) {
    this.moduleId = value;
  }

  /**
   * Setter parentExecutionId
   * @param {null } value
   */
  protected setParentExecutionId(value: null) {
    this.parentExecutionId = value;
  }

  /**
   * Setter releaseId
   * @param {number} value
   */
  protected setReleaseId(value: number) {
    this.releaseId = value;
  }

  /**
   * Setter result
   * @param {string} value
   */
  protected setResult(value: string) {
    this.result = value;
  }

  /**
   * Setter status
   * @param {string} value
   */
  protected setStatus(value: string) {
    this.status = value;
  }

  /**
   * Setter tags
   * @param {null } value
   */
  protected setTags(value: null) {
    this.tags = value;
  }

  /**
   * Setter testcases
   * @param {Testcase[]} value
   */
  protected setTestcases(value: Testcase[]) {
    this.testcases = value;
  }

  /**
   * Setter type
   * @param {string} value
   */
  protected setType(value: string) {
    this.type = value;
  }

  /**
   * Setter userstoryId
   * @param {null } value
   */
  protected setUserstoryId(value: null) {
    this.userstoryId = value;
  }
}
