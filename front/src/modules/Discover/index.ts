import initReducer from './reducer';
import { DiscoverActionsService } from './service';
import { types, createActions } from './actions';

import { PlacesService } from "../../services/Places";

interface Services {
  placesSvc: PlacesService,
}

const configureDiscoverModule = (services: Services) => {
  const actions = new DiscoverActionsService(
    createActions(),
    services.placesSvc
  );

  const reducer = initReducer(types, {
    placesSvc: services.placesSvc,
  });

  return { actions, reducer, types };
};

export default configureDiscoverModule;
