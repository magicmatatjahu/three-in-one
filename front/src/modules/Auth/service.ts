import { Dispatch } from "redux";
import { ActionsService } from '../actionsService';

import { AuthActions } from "./actions";
import { AuthService } from "../../services/Auth";
import { LoginDTO, RegistrationDTO } from "../../services/Auth/types";

export class AuthActionsService extends ActionsService {
  constructor(
    private readonly _actions: AuthActions,
    private readonly _authSvc: AuthService,
  ) {
    super()
  }

  login = (dto: LoginDTO) => async (dispatch: Dispatch) => {
    dispatch(this._actions.loginAttempt());

    try {
      await this._authSvc.login(dto);
      dispatch(this._actions.loginSuccess());
    } catch (err) {
      dispatch(this._actions.loginFailure(err));
    }
  };

  register = (dto: RegistrationDTO) => async (dispatch: Dispatch) => {
    dispatch(this._actions.loginAttempt());

    try {
      await this._authSvc.register(dto);
      dispatch(this._actions.loginSuccess());
    } catch (err) {
      dispatch(this._actions.loginFailure(err));
    }
  };

  logout = () => async (dispatch: Dispatch) => {
    this._authSvc.logout();
    dispatch(this._actions.logoutSuccess());
  };
}
