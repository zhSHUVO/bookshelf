import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterState {
    filter: string;
    search: string;
}

const initialState: FilterState = {
    filter: "all",
    search: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        searchQuery: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { searchQuery } = filterSlice.actions;
