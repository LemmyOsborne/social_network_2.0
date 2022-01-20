import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {newsAPI} from "../api/api";

export const fetchingNews = createAsyncThunk(
    "news/fetchingNews",
    async () => {
        const response = await newsAPI.fetchingNews()
        return response.data
    }
)

const newsSlice = createSlice({
    name: "news",
    initialState: {
        articles: []
    },
    reducers: {},
    extraReducers: {
        [fetchingNews.fulfilled]: (state, action) => {
            state.articles = action.payload.articles
        }
    }
})

export default newsSlice.reducer