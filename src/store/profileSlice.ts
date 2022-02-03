import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { profileAPI } from "../api/api"


export const fetchingProfile = createAsyncThunk(
    "profile/fetchingProfile",
    async (userId: any) => {
        const response = await profileAPI.fetchingProfile(userId)
        return response.data
    }
)

export const fetchingStatus = createAsyncThunk(
    "profile/fetchingStatus",
    async (userId: any) => {
        const response = await profileAPI.fetchingStatus(userId)
        return response.data
    }
)
export const updateStatus = createAsyncThunk(
    "profile/updateStatus",
    async (status: string) => {
        const response = await profileAPI.updateStatus(status)
        return response.data
    }
)

export const updateProfileInfo = createAsyncThunk(
    "profile/updateProfileInfo",
    async (profileData: object) => {
        const response = await profileAPI.updateProfileInfo(profileData)
        return response.data
    }
)

export const updateProfilePhoto = createAsyncThunk(
    "profile/updateProfilePhoto",
    async (profilePhoto: string | Blob) => {
        const response = await profileAPI.updateProfilePhoto(profilePhoto)
        return response.data
    }
)


export type Profile = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}

type Post = {
    id: number
    text: string
}


interface ProfileSliceState {
    posts: Array<Post>
    profile: Profile | any
    status: string
    isProfileFetched: boolean
}

const initialState: ProfileSliceState =  {
    posts: [{ id: 0, text: "This is my second post!" }],
    profile: {},
    status: "",
    isProfileFetched: false
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        addPost(state, action) {
            state.posts.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchingProfile.fulfilled, (state, action: AnyAction) => {
                state.profile = action.payload
                state.isProfileFetched = true
            })
            .addCase(fetchingStatus.fulfilled, (state, action: AnyAction) => {
                state.status = action.payload
            })
            .addCase(updateStatus.fulfilled, (state, action: AnyAction) => {
                state.status = action.meta.arg
            })
            .addCase(updateProfilePhoto.fulfilled, (state, action: AnyAction) => {
                state.profile.photos = action.payload.data.photos
            })
    }
})

export const { addPost } = profileSlice.actions
export default profileSlice.reducer