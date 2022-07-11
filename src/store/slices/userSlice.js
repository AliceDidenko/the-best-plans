import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: null,
    login: null,
    avatar: null,
    id: null,
    token: null,
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.name = action.payload.name
            state.login = action.payload.login
            state.avatar = action.payload.avatar
            state.id = action.payload.id
            state.token = action.payload.token
        },
        removeUser(state) {
            state.name = null
            state.login = null
            state.avatar = null
            state.id = null
            state.token = null
        }
    }
})

export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer