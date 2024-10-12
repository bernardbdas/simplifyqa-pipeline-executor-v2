declare global {
  namespace NodeJS {
    interface ProcessEnv {
      INPUT_PIPELINEID: string;
      INPUT_APIURL: string;
      INPUT_APIKEY: string;
      INPUT_THRESHOLD: string;
      INPUT_VERBOSE: string;
    }
  }
}

export {};
