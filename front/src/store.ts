import { combineReducers, createStore, applyMiddleware, ReducersMapObject } from 'redux';
import thunkMiddleware from 'redux-thunk';

const configureStore = (reducers: ReducersMapObject<any, any>) => {
  const rootReducer = combineReducers(reducers);
  const middleware = applyMiddleware(thunkMiddleware);

  return createStore(rootReducer, middleware); 
};

export default configureStore;
