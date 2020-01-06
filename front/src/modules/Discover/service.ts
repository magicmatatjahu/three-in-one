import { Dispatch } from "redux";
import { ActionsService } from '../actionsService';

import { DiscoverActions } from "./actions";
import { PlacesService } from "../../services/Places";
import { CreatePlaceDTO, EditPlaceDTO } from "../../services/Places/types";

export class DiscoverActionsService extends ActionsService {
  constructor(
    private readonly _actions: DiscoverActions,
    private readonly _placesSvc: PlacesService,
  ) {
    super()
  }

  fetchPlaces = () => async (dispatch: Dispatch) => {
    dispatch(this._actions.fetchPlacesAttempt());

    try {
      await this._placesSvc.fetchPlaces();
      dispatch(this._actions.fetchPlacesSuccess());
    } catch (err) {
      dispatch(this._actions.fetchPlacesFailure(err));
    }
  };

  createPlace = (dto: CreatePlaceDTO) => async (dispatch: Dispatch) => {
    dispatch(this._actions.createPlaceAttempt());

    try {
      await this._placesSvc.fetchPlaces();
      dispatch(this._actions.createPlaceSuccess());
    } catch (err) {
      dispatch(this._actions.createPlaceFailure(err));
    }
  };

  removePlace = (id: number) => async (dispatch: Dispatch) => {
    dispatch(this._actions.removePlaceAttempt());

    try {
      await this._placesSvc.removePlace(id);
      dispatch(this._actions.removePlaceSuccess());
    } catch (err) {
      dispatch(this._actions.removePlaceFailure(err));
    }
  }

  editPlace = (dto: EditPlaceDTO) => async (dispatch: Dispatch) => {
    dispatch(this._actions.editPlaceAttempt());

    try {
      await this._placesSvc.editPlace(dto);
      dispatch(this._actions.editPlaceSuccess());
    } catch (err) {
      dispatch(this._actions.editPlaceFailure(err));
    }
  };
}
