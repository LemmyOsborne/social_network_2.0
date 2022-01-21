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
        apiError: "",
    },
    reducers: {},
    extraReducers: {
        [fetchingNews.fulfilled]: (state, action) => {
            state.articles = action.payload
        },
        [fetchingNews.rejected]: (state, action) => {
            state.apiError = action.error.message
        },
        [fetchingDefaultNews.fulfilled]: (state, action) => {
            state.articles = action.payload
        },
    }
})

export const {findArticle} = newsSlice.actions
export default newsSlice.reducer