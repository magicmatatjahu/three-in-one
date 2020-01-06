import { Services } from "./types";
import configureAuthModule from './Auth';
import { extractActions, extractReducers } from './extract';

const configureModules = async (services: Services) => {
  // @ts-ignore
  const authModule = configureAuthModule(services);

  const modules = {
    auth: authModule,
  };

  return {
    actions: extractActions(modules),
    reducers: extractReducers(modules),
  };
};

export default configureModules;