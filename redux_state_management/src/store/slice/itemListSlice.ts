import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

const itemListSlice = createSlice( {
    name: 'itemList',
    initialState: {
        value: [] as ListItem[]
    },
    reducers: {
        setItemList: ( state, action: PayloadAction<ListItem[]> ) => {
            state.value = action.payload
        }
    }
} );

export const { setItemList } = itemListSlice.actions;
export default itemListSlice.reducer;
