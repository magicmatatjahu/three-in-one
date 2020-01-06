// import { Dispatch, Action, AnyAction } from "redux";

// export abstract class ActionsService {
//   private _dispatch: Dispatch | null = null;

//   setDispatch(dispatch: Dispatch) {
//     this._dispatch = dispatch;
//   }

//   dispatch<A extends Action = AnyAction>(action: A) {
//     if (this._dispatch) {
//       this._dispatch(action)
//     } else {
//       // TODO: implement something here
//     }
//   }
// }

export abstract class ActionsService {}
