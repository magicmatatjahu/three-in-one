import { Service } from "./types";

import { HttpClient } from "./HttpClient";

import { configureAuthService } from "./Auth";
import { configurePlacesService } from "./Places";

const configureServices = async ({
  apiBasePath,
}: {
  apiBasePath: string
}): Promise<{ [key: string]: Service }> => {
  const httpClient = new HttpClient(apiBasePath);
  const authSvc = configureAuthService({ httpClient });
  const placesSvc = configurePlacesService({ httpClient, authSvc });

  return { httpClient, authSvc, placesSvc };
};

export default configureServices;
