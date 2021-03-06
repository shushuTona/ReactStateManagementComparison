import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';

type initialStateValueType = ListItem[];

const setItemList = createAsyncThunk<initialStateValueType>(
    'get/setItemList',
    async ( thunkAPI ): Promise<initialStateValueType> => {
        const itemList = await fetch( 'https://jsonplaceholder.typicode.com/photos/' )
                                            .then( response => response.json() )
                                            .then( ( json ) => {
                                                return json.slice( 0, 30 );
                                            } );
        return itemList;
    }
);

const initialState = {
    value: [] as initialStateValueType,
    loading: false
}

export type initialStateType = typeof initialState;

const itemListSlice = createSlice( {
    name: 'itemList',
    initialState,
    reducers: {},
    extraReducers: {
        [setItemList.pending.type]: ( state ) => {
            state.loading = true;
        },
        [setItemList.fulfilled.type]: ( state, action ) => {
            state.loading = false;
            state.value = action.payload;
        },
        [setItemList.rejected.type]: ( state ) => {
            state.loading = true;
        }
    }
} );

const itemListReducer = itemListSlice.reducer;

export {
    setItemList,
    itemListReducer
};
