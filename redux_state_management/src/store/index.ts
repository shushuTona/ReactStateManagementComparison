import { configureStore } from '@reduxjs/toolkit';
import itemListReducer from './slice/itemListSlice';

const store = configureStore( {
    reducer: {
        itemList: itemListReducer,
    }
} );

export { store };
