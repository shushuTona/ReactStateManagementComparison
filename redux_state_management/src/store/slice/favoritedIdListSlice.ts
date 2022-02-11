import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

export type favoritedIdListType = number[];
type actionType = PayloadAction<number>;

const favoritedIdListSlice = createSlice( {
    name: 'favoritedIdList',
    initialState: {
        value: [] as favoritedIdListType
    },
    reducers: {
        addFavorite: ( state, action: actionType ) => {
            const newState: favoritedIdListType = [...state.value, action.payload];
            state.value = newState;
        },
        removeFavorite: ( state, action: actionType ) => {
            const newState = state.value.filter( ( id: number ) => {
                return id !== action.payload;
            } );
            state.value = newState;
        },
    }
} );

export const { addFavorite, removeFavorite } = favoritedIdListSlice.actions;

export default favoritedIdListSlice.reducer;
