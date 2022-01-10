import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';

import mapReducer from '../features/map/mapSlice'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// configurtion for local storage
export const config = {
  key: 'root',
  storage: storage
}

const rootReducer = combineReducers({
  map: mapReducer
})

const persisted = persistReducer(config, rootReducer)

export const store = configureStore({
  reducer: persisted
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
