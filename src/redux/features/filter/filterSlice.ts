import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterState {
    search: string;
    filterGenre: string;
    filterYear: string;
}

const initialState: FilterState = {
    search: "",
    filterGenre: "All",
    filterYear: "All",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        searchQuery: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        selectFilterGenre: (state, action: PayloadAction<string>) => {
            state.filterGenre = action.payload;
        },
        selectFilterYear: (state, action: PayloadAction<string>) => {
            state.filterYear = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { searchQuery, selectFilterGenre, selectFilterYear } = filterSlice.actions;
