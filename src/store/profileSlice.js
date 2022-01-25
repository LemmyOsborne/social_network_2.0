import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {profileAPI} from "../api/api";


export const fetchingProfile = createAsyncThunk(
    "profile/fetchingProfile",
    async (userId) => {
        const response = await profileAPI.fetchingProfile(userId)
        return response.data
    }
)

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        posts: [{id: 0, text: "This is my second post!"}],
        profile: null
    },
    reducers: {
        addPost(state, action) {
            state.posts.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchingProfile.fulfilled, (state, action) => {
                state.profile = action.payload
            })
    }
})

export const {addPost} = profileSlice.actions
export default profileSlice.reducer