import {createSlice} from "@reduxjs/toolkit";

const profileSlice = createSlice({
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

export const {addPost} = profileSlice.actions
export default profileSlice.reducer