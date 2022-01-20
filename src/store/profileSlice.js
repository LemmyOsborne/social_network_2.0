import {createSlice} from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
    name: "profile",
    initialState: {
        posts: [{text: "This is my second post!"}]
    },
    reducers: {
        addPost(state, action) {
            state.posts.push(action.payload)
        }
    }
})

export const {addPost} = ProfileSlice.actions
export default ProfileSlice.reducer