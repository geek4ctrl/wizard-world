import { BaseService } from "~/services/base.service";

export const useUseContentService = () => {
  // https://wizard-world-api.herokuapp.com/Elixirs
  const base = new BaseService("https://wizard-world-api.herokuapp.com");

  const fetchContent = async (path: string, host?: string) => {
    const requestUrl: string = base.requestUrl({
      path: path,
      queryParams: "",
    });
  };
};
