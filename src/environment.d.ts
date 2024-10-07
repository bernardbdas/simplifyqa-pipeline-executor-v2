declare global {
  namespace NodeJS {
    interface ProcessEnv {
      INPUT_PIPELINEID: number;
      INPUT_APIURL: string;
      INPUT_APIKEY: string;
      INPUT_THRESHOLD: number;
      INPUT_VERBOSE: boolean;
    }
  }
}

export {};
