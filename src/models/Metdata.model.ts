import { IMetadata } from '../interfaces/IMetadata';
import { Execution } from '../models/Execution.model';

export class Metadata implements IMetadata {
  threshold: number;
  isKilled: boolean;
  verbose: boolean;
  totalCount: number;
  passedCount: number;
  passPercent: number;
  failedCount: number;
  failedPercent: number;
  skippedCount: number;
  skippedPercent: number;
  state: string;
  result: string;

  constructor({
    threshold,
    verbose,
    isKilled,
    execObj
  }: {
    threshold: number;
    verbose: boolean;
    isKilled: boolean;
    execObj: Execution;
  }) {
    this.threshold = threshold || 100.0;
    this.verbose = verbose || false;
    this.isKilled = isKilled || false;
    this.totalCount = execObj.testcases.length || 0;
    this.passedCount = 0;
    this.failedCount = 0;
    this.skippedCount = 0;
    this.passPercent = (this.passedCount / this.totalCount) * 100.0 || 0;
    this.failedPercent = (this.failedCount / this.totalCount) * 100.0 || 0;
    this.skippedPercent = (this.skippedCount / this.totalCount) * 100.0 || 0;
    this.result = execObj.result || 'NOT_EXECUTED';
    this.state = execObj.status || 'NOT_EXECUTED';
  }

  /**
   * Getter threshold
   * @return {number}
   */
  public getThreshold(): number {
    return this.threshold;
  }

  /**
   * Getter isKilled
   * @return {boolean}
   */
  public getIsKilled(): boolean {
    return this.isKilled;
  }

  /**
   * Getter verbose
   * @return {boolean}
   */
  public getVerbose(): boolean {
    return this.verbose;
  }

  /**
   * Getter totalCount
   * @return {number}
   */
  public getTotalCount(): number {
    return this.totalCount;
  }

  /**
   * Getter passedCount
   * @return {number}
   */
  public getPassedCount(): number {
    return this.passedCount;
  }

  /**
   * Getter passPercent
   * @return {number}
   */
  public getPassPercent(): number {
    return this.passPercent;
  }

  /**
   * Getter failedCount
   * @return {number}
   */
  public getFailedCount(): number {
    return this.failedCount;
  }

  /**
   * Getter failedPercent
   * @return {number}
   */
  public getFailedPercent(): number {
    return this.failedPercent;
  }

  /**
   * Getter skippedCount
   * @return {number}
   */
  public getSkippedCount(): number {
    return this.skippedCount;
  }

  /**
   * Getter skippedPercent
   * @return {number}
   */
  public getSkippedPercent(): number {
    return this.skippedPercent;
  }

  /**
   * Getter state
   * @return {string}
   */
  public getState(): string {
    return this.state;
  }

  /**
   * Getter result
   * @return {string}
   */
  public getResult(): string {
    return this.result;
  }

  /**
   * Setter threshold
   * @param {number} value
   */
  protected setThreshold(value: number) {
    this.threshold = value;
  }

  /**
   * Setter isKilled
   * @param {boolean} value
   */
  protected setIsKilled(value: boolean) {
    this.isKilled = value;
  }

  /**
   * Setter verbose
   * @param {boolean} value
   */
  protected setVerbose(value: boolean) {
    this.verbose = value;
  }

  /**
   * Setter totalCount
   * @param {number} value
   */
  protected setTotalCount(value: number) {
    this.totalCount = value;
  }

  /**
   * Setter passedCount
   * @param {number} value
   */
  protected setPassedCount(value: number) {
    this.passedCount = value;
  }

  /**
   * Setter passPercent
   * @param {number} value
   */
  protected setPassPercent(value: number) {
    this.passPercent = value;
  }

  /**
   * Setter failedCount
   * @param {number} value
   */
  protected setFailedCount(value: number) {
    this.failedCount = value;
  }

  /**
   * Setter failedPercent
   * @param {number} value
   */
  protected setFailedPercent(value: number) {
    this.failedPercent = value;
  }

  /**
   * Setter skippedCount
   * @param {number} value
   */
  protected setSkippedCount(value: number) {
    this.skippedCount = value;
  }

  /**
   * Setter skippedPercent
   * @param {number} value
   */
  protected setSkippedPercent(value: number) {
    this.skippedPercent = value;
  }

  /**
   * Setter state
   * @param {string} value
   */
  protected setState(value: string) {
    this.state = value;
  }

  /**
   * Setter result
   * @param {string} value
   */
  protected setResult(value: string) {
    this.result = value;
  }
}
