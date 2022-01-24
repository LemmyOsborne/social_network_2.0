import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {newsAPI} from "../api/api";

export const fetchingNews = createAsyncThunk(
    "news/fetchingNews",
    async (searchTitle) => {
        const response = await newsAPI.fetchingNews(searchTitle)
        return response.data
    }
)
export const fetchingDefaultNews = createAsyncThunk(
    "news/fetchingDefaultNews",
    async () => {
        const response = await newsAPI.fetchingDefaultNews()
        return response.data
    }
)

const newsSlice = createSlice({
    name: "news",
    initialState: {
        articles: [],
        apiError: false,
        isFetching: false
    },
    reducers: {},
    extraReducers: {
        [fetchingNews.pending]: (state) => {
            state.isFetching = true
        },
        [fetchingNews.fulfilled]: (state, action) => {
            state.articles = action.payload
            state.isFetching = false
        },
        [fetchingNews.rejected]: (state, action) => {
            state.apiError = true
        },
        [fetchingDefaultNews.pending]: (state) => {
            state.isFetching = true
        },
        [fetchingDefaultNews.fulfilled]: (state, action) => {
            state.articles = action.payload
            state.isFetching = false
        },
        [fetchingDefaultNews.rejected]: (state, action) => {
            state.apiError = true
        },
    }
})


export default newsSlice.reducer