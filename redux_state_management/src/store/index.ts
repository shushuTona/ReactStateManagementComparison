import { configureStore } from '@reduxjs/toolkit';

import { DefaultRootState } from 'react-redux'
import itemListReducer from './slice/itemListSlice';
import favoritedIdListReducer, { favoritedIdListType } from './slice/favoritedIdListSlice';

export interface StateInterface extends DefaultRootState {
    itemList: {
        value: ListItem[]
    },
    favoritedIdList: {
        value: favoritedIdListType
    },
}

const store = configureStore( {
    reducer: {
        itemList: itemListReducer,
        favoritedIdList: favoritedIdListReducer,
    }
} );

export { store };
