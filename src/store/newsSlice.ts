import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newsAPI } from "../api/api";

export const fetchingNews = createAsyncThunk(
    "news/fetchingNews",
    async (searchTitle: string) => {
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


export type ArticleType = {
    id: number
    title: string
    url: string
    imageUrl: string
    summary: string
}

interface NewsSliceState {
    articles: Array<ArticleType>
    apiError: boolean
    isFetching: boolean
}

const initialState: NewsSliceState = {
    articles: [],
    apiError: false,
    isFetching: false
}

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchingNews.pending, (state) => {
                state.isFetching = true
            })
            .addCase(fetchingNews.fulfilled, (state, action: AnyAction) => {
                state.articles = action.payload
                state.isFetching = false
            })
            .addCase(fetchingNews.rejected, (state) => {
                state.apiError = true
            })
            .addCase(fetchingDefaultNews.pending, (state) => {
                state.isFetching = true
            })
            .addCase(fetchingDefaultNews.fulfilled, (state, action: AnyAction) => {
                state.articles = action.payload
                state.isFetching = false
            })
            .addCase(fetchingDefaultNews.rejected, (state) => {
                state.apiError = true
            })
    }
})


export default newsSlice.reducer