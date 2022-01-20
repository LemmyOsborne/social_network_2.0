import {createSlice} from "@reduxjs/toolkit";

export const dialogsSlice = createSlice({
    name: "dialogs",
    initialState: {
        dialogs: [
            {id: 1, name: "Tigran"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Asmik"},
            {id: 4, name: "Elena"},
            {id: 5, name: "Vladimir"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "What's up, boy"},
            {id: 3, message: "Yo"}
        ]
    },
    reducers: {
        addMessage(state, action) {
            state.messages.push(action.message)
        }
    }
})

export const {addMessage} = dialogsSlice.actions
export default dialogsSlice.reducer
