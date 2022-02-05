import { createSlice } from '@reduxjs/toolkit';

export type favoritedIdListType = number[];

const favoritedIdListSlice = createSlice( {
    name: 'favoritedIdList',
    initialState: {
        value: [] as favoritedIdListType
    },
    reducers: {
        addFavorite: ( state, action ) => {
            const newState: favoritedIdListType = [...state.value, action.payload];
            state.value = newState;
        },
        removeFavorite: ( state, action ) => {
            const newState = state.value.filter( ( id: number ) => {
                return id !== action.payload;
            } );
            state.value = newState;
        },
    }
} );

export const { addFavorite, removeFavorite } = favoritedIdListSlice.actions;

export default favoritedIdListSlice.reducer;
