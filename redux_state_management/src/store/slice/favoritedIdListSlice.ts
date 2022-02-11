import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

export type favoritedIdListType = number[];
type actionType = PayloadAction<number>;

const initialState = {
    value: [] as favoritedIdListType
}

export type initialStateType = typeof initialState;

const favoritedIdListSlice = createSlice( {
    name: 'favoritedIdList',
    initialState,
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

const favoritedIdListReducer = favoritedIdListSlice.reducer;

export const { addFavorite, removeFavorite } = favoritedIdListSlice.actions;
export { favoritedIdListReducer };
