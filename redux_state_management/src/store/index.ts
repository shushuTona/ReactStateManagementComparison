import { configureStore } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux'
import {
    initialStateType as itemListInitialStateType,
    itemListReducer
} from './slice/itemListSlice';
import {
    initialStateType as favoriteInitialStateType,
    favoritedIdListReducer
} from './slice/favoritedIdListSlice';

export interface StateInterface extends DefaultRootState {
    itemList: itemListInitialStateType,
    favoritedIdList: favoriteInitialStateType,
}

const store = configureStore( {
    reducer: {
        itemList: itemListReducer,
        favoritedIdList: favoritedIdListReducer,
    }
} );

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
