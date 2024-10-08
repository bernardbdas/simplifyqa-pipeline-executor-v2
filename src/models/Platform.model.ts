import { IPlatform } from '@interfaces/IPlatform';

export class Platform implements IPlatform {
  id: string;
  name: string;
  technologyType: string;
  type: string;

  constructor(data: IPlatform) {
    this.id = data.id;
    this.name = data.name;
    this.technologyType = data.technologyType;
    this.type = data.type;
  }

  /**
   * Getter id
   * @return {string}
   */
  public getId(): string {
    return this.id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Getter technologyType
   * @return {string}
   */
  public getTechnologyType(): string {
    return this.technologyType;
  }

  /**
   * Getter type
   * @return {string}
   */
  public getType(): string {
    return this.type;
  }

  /**
   * Setter id
   * @param {string} value
   */
  protected setId(value: string) {
    this.id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  protected setName(value: string) {
    this.name = value;
  }

  /**
   * Setter technologyType
   * @param {string} value
   */
  protected setTechnologyType(value: string) {
    this.technologyType = value;
  }

  /**
   * Setter type
   * @param {string} value
   */
  protected setType(value: string) {
    this.type = value;
  }
}
