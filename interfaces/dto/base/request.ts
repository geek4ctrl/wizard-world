export interface IBaseResponse {
  isSuccessful: boolean;
  responseCode: number;
  error: any;
  metadata: any;
  httpCodeEnum: number;
}

export interface IRequestUrl {
  path: string;
  queryParams?: Record<string, unknown>;
}

export interface IGenerateUrl {
  baseUrl: string;
  path: string;
  queryParams: Record<string, string | unknown>;
}
