import { Types, Action } from "../types";

import { PlacesService } from "../../services/Places"
import { Place } from "../../services/Places/types"

export interface DiscoverState {
  places: Place[];
  error: Error | null,
}

const initReducer = (
  types: Types, 
  services: {
    placesSvc: PlacesService,
  }
) => {
  const INITIAL_STATE: DiscoverState = {
    places: [],
    error: null,
  };

  return (state: DiscoverState = INITIAL_STATE, action: Action) => {
    const { type, payload } = action;

    switch (type) {
      case types.LOGIN_ATTEMPT:
        return {
          ...state,
          isAuthenticating: true
        };
      case types.LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticating: false,
          isAuthenticated: true,
        };
      case types.LOGIN_FAILURE:
        return {
          ...state,
          isAuthenticating: false,
          error: payload,
        }
      case types.REGISTRATION_ATTEMPT:
        return {
          ...state,
          isAuthenticating: false,
          isAuthenticated: false,
        }
      case types.REGISTRATION_FAILURE:
        return {
          ...state,
          error: payload,
        }
      case types.LOGOUT_SUCCESS:
        return {
          ...state,
          isAuthenticating: false,
          isAuthenticated: false,
          error: null,
        }
      default:
        return state;
    }
  };
};

export default initReducer;
