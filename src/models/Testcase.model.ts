import { ITestcase } from '../interfaces/ITestcase';
import { Platform } from '../models/Platform.model';

export class Testcase implements ITestcase {
  testcaseId: number;
  testcaseName: string;
  testcaseDesc: string;
  versionId: string;
  testcaseSeq: number;
  stepId: string;
  stepCount: number;
  tcType: string;
  configuration: {};
  iterationsSelected: string[];
  platform: Platform[];

  constructor(data: ITestcase) {
    this.testcaseId = data.testcaseId;
    this.testcaseName = data.testcaseName;
    this.testcaseDesc = data.testcaseDesc;
    this.versionId = data.versionId;
    this.testcaseSeq = data.testcaseSeq;
    this.stepId = data.stepId;
    this.stepCount = data.stepCount;
    this.tcType = data.tcType;
    this.configuration = data.configuration;
    this.iterationsSelected = data.iterationsSelected;
    this.platform = data.platform.map((platform) => new Platform(platform));
  }

  /**
   * Getter testcaseId
   * @return {number}
   */
  public getTestcaseId(): number {
    return this.testcaseId;
  }

  /**
   * Getter testcaseName
   * @return {string}
   */
  public getTestcaseName(): string {
    return this.testcaseName;
  }

  /**
   * Getter testcaseDesc
   * @return {string}
   */
  public getTestcaseDesc(): string {
    return this.testcaseDesc;
  }

  /**
   * Getter versionId
   * @return {string}
   */
  public getVersionId(): string {
    return this.versionId;
  }

  /**
   * Getter testcaseSeq
   * @return {number}
   */
  public getTestcaseSeq(): number {
    return this.testcaseSeq;
  }

  /**
   * Getter stepId
   * @return {string}
   */
  public getStepId(): string {
    return this.stepId;
  }

  /**
   * Getter stepCount
   * @return {number}
   */
  public getStepCount(): number {
    return this.stepCount;
  }

  /**
   * Getter tcType
   * @return {string}
   */
  public getTcType(): string {
    return this.tcType;
  }

  /**
   * Getter configuration
   * @return {{}}
   */
  public getConfiguration(): {} {
    return this.configuration;
  }

  /**
   * Getter iterationsSelected
   * @return {string[]}
   */
  public getIterationsSelected(): string[] {
    return this.iterationsSelected;
  }

  /**
   * Getter platform
   * @return {IPlatform[]}
   */
  public getPlatform(): Platform[] {
    return this.platform;
  }

  /**
   * Setter testcaseId
   * @param {number} value
   */
  protected setTestcaseId(value: number) {
    this.testcaseId = value;
  }

  /**
   * Setter testcaseName
   * @param {string} value
   */
  protected setTestcaseName(value: string) {
    this.testcaseName = value;
  }

  /**
   * Setter testcaseDesc
   * @param {string} value
   */
  protected setTestcaseDesc(value: string) {
    this.testcaseDesc = value;
  }

  /**
   * Setter versionId
   * @param {string} value
   */
  protected setVersionId(value: string) {
    this.versionId = value;
  }

  /**
   * Setter testcaseSeq
   * @param {number} value
   */
  protected setTestcaseSeq(value: number) {
    this.testcaseSeq = value;
  }

  /**
   * Setter stepId
   * @param {string} value
   */
  protected setStepId(value: string) {
    this.stepId = value;
  }

  /**
   * Setter stepCount
   * @param {number} value
   */
  protected setStepCount(value: number) {
    this.stepCount = value;
  }

  /**
   * Setter tcType
   * @param {string} value
   */
  protected setTcType(value: string) {
    this.tcType = value;
  }

  /**
   * Setter configuration
   * @param {{}} value
   */
  protected setConfiguration(value: {}) {
    this.configuration = value;
  }

  /**
   * Setter iterationsSelected
   * @param {string[]} value
   */
  protected setIterationsSelected(value: string[]) {
    this.iterationsSelected = value;
  }

  /**
   * Setter platform
   * @param {IPlatform[]} value
   */
  protected setPlatform(value: Platform[]) {
    this.platform = value;
  }
}
