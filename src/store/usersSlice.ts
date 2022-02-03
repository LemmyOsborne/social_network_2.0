import { createAsyncThunk, createSlice, AnyAction } from "@reduxjs/toolkit"
import { usersAPI } from "../api/api"

export const fetchingUsers = createAsyncThunk(
    "users/fetchingUsers",
    async ({page, search}: any) => {
        const response = await usersAPI.fetchingUsers(page, search)
        return response.data
    }
)

export const follow = createAsyncThunk(
    "users/follow",
    async (id: number) => {
        const response = await usersAPI.follow(id)
        return response.data
    }
)

export const unfollow = createAsyncThunk(
    "users/unfollow",
    async (id: number) => {
        const response = await usersAPI.unfollow(id)
        return response.data
    }
)


export type UserType = {
    name: string
    id: number
    uniqueUrlName: number | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

interface UsersSliceState {
    users: Array<UserType>
    totalPages: number 
}

const initialState: UsersSliceState = {
    users: [],
    totalPages: 1
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchingUsers.fulfilled, (state, action: AnyAction) => {
                state.users = action.payload.items
                state.totalPages = action.payload.totalCount
            })
            .addCase(follow.fulfilled, (state, action: AnyAction) => {
                state.users.map(user => {
                    if (user.id === action.meta.arg) user.followed = true
                })
            })
            .addCase(unfollow.fulfilled, (state, action: AnyAction) => {
                state.users.map(user => {
                    if (user.id === action.meta.arg) user.followed = false
                })
            })
    }
})


export default usersSlice.reducer