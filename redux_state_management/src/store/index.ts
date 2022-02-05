import { configureStore } from '@reduxjs/toolkit';
import itemListReducer from './slice/itemListSlice';
import favoritedIdListReducer from './slice/favoritedIdListSlice';

const store = configureStore( {
    reducer: {
        itemList: itemListReducer,
        favoritedIdList: favoritedIdListReducer,
    }
} );

export { store };
