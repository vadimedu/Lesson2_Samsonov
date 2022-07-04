import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
   articles: [],
};

const url = 'https://api.spaceflightnewsapi.net/v3/articles';

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addArticles (state, action) {
            state.articles = action.payload;
        }
    },
        // extraReducers: {
        //     [fetchData.pending]: (state, action) => {},
        //     [fetchData.fulfilled]:(state, action) => {},
        // },
});

export const fetchData = createAsyncThunk (
    'articles/fetchArticles', 
    async (user, thunkAPI) => {
        const response = await fetch(url);
        return await response.json();
    }
);

export const { addArticles } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;