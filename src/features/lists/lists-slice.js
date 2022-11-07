import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allIds: [],
    byId: {},
    hasError: false,
    isLoading: false
};

export const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        getLists: (state) => {

        },
        createList: (state) => {

        },
    },
});

export const { getLists, createList } = listsSlice.actions;

export default listsSlice.reducer;