import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersAPI} from "../api/api";

export const fetchingUsers = createAsyncThunk(
    "users/fetchingUsers",
    async ({page, search}) => {
        const response = await usersAPI.fetchingUsers(page, search)
        return response.data
    }
)

export const follow = createAsyncThunk(
    "users/follow",
    async ({id}) => {
        const response = await usersAPI.follow(id)
        return response.data
    }
)

export const unfollow = createAsyncThunk(
    "users/unfollow",
    async ({id}) => {
        const response = await usersAPI.unfollow(id)
        return response.data
    }
)

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        totalPages: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchingUsers.fulfilled, (state, action) => {
                state.users = action.payload.items
                state.totalPages = action.payload.totalCount
            })
            .addCase(follow.fulfilled, (state, action) => {
                state.users.map(user => {
                    if (user.id === action.meta.arg.id) user.followed = true
                })
            })
            .addCase(unfollow.fulfilled, (state, action) => {
                state.users.map(user => {
                    if (user.id === action.meta.arg.id) user.followed = false
                })
            })
    }
})


export default usersSlice.reducer