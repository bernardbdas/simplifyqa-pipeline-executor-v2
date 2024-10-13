export interface IMetadata<ExecutionMetadataObject = any> {
  threshold: number;
  isKilled: boolean;
  verbose: boolean;
  totalCount: number;
  state: string;
  result: string;
}
