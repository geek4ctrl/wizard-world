export class BaseService {
  protected readonly baseUrl;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public requestUrl({
    path,
    queryParams,
  }: {
    path: string;
    queryParams: string;
  }) {
    const baseUrl = this.baseUrl;

    return `${baseUrl}/${path}${queryParams ? "/?" + queryParams : ""}`;
  }
}
