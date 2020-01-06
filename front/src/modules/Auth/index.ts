import initReducer from './reducer';
import { AuthActionsService } from './service';
import { types, createActions } from './actions';

import { AuthService } from "../../services/Auth";

interface Services {
  authSvc: AuthService,
}

const configureAuthModule = (services: Services) => {
  const actions = new AuthActionsService(
    createActions(),
    services.authSvc
  );

  const reducer = initReducer(types, {
    authSvc: services.authSvc,
  });

  return { actions, reducer, types };
};

export default configureAuthModule;
