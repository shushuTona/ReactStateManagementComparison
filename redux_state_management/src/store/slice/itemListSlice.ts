import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';

const setItemList = createAsyncThunk(
    'get/setItemList',
    async (thunkAPI) => {
        const itemList = await fetch( 'https://jsonplaceholder.typicode.com/photos/' )
                                            .then( response => response.json() )
                                            .then( ( json ) => {
                                                return json.slice( 0, 30 );
                                            } );
        return itemList;
    }
);

const initialState = {
    value: [] as ListItem[],
    loading: false
}

export type initialStateType = typeof initialState;

const itemListSlice = createSlice( {
    name: 'itemList',
    initialState,
    reducers: {},
    extraReducers: {
        [setItemList.pending as any]: ( state ) => {
            state.loading = true;
        },
        [setItemList.fulfilled as any]: ( state, action ) => {
            state.loading = false;
            state.value = action.payload;
        },
        [setItemList.rejected as any]: ( state ) => {
            state.loading = true;
        }
    }
} );

const itemListReducer = itemListSlice.reducer;

export {
    setItemList,
    itemListReducer
};
