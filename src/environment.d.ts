declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PIPELINEID: number;
      APIURL: string;
      APIKEY: string;
      THRESHOLD: number;
      VERBOSE: boolean;
    }
  }
}

export {};
