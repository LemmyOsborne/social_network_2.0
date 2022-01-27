import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {profileAPI} from "../api/api";


export const fetchingProfile = createAsyncThunk(
    "profile/fetchingProfile",
    async (userId) => {
        const response = await profileAPI.fetchingProfile(userId)
        return response.data
    }
)

export const fetchingStatus = createAsyncThunk(
    "profile/fetchingStatus",
    async (userId) => {
        const response = await profileAPI.fetchingStatus(userId)
        return response.data
    }
)
export const updateStatus = createAsyncThunk(
    "profile/updateStatus",
    async (status) => {
        const response = await profileAPI.updateStatus(status)
        return response.data
    }
)

export const updateProfileInfo = createAsyncThunk(
    "profile/updateProfileInfo",
    async (profileData) => {
        const response = await profileAPI.updateProfileInfo(profileData)
        return response.data
    }
)

export const updateProfilePhoto = createAsyncThunk(
    "profile/updateProfilePhoto",
    async (profilePhoto) => {
        const response = await profileAPI.updateProfilePhoto(profilePhoto)
        return response.data
    }
)

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        posts: [{id: 0, text: "This is my second post!"}],
        profile: {},
        status: "",
        isProfileFetched: false
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
                state.isProfileFetched = true
            })
            .addCase(fetchingStatus.fulfilled, (state, action) => {
                state.status = action.payload
            })
            .addCase(updateStatus.fulfilled, (state, action) => {
                state.status = action.meta.arg
            })
            .addCase(updateProfilePhoto.fulfilled, (state, action) => {
                debugger
                state.profile.photos = action.payload.data.photos
            })
    }
})

export const {addPost} = profileSlice.actions
export default profileSlice.reducer