import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const callback = async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
}

export const fetchUser = createAsyncThunk('user/fetchUser', callback)

const INITIAL_STATE = {
    userDetail: {}
}

const cartSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    extraReducers: {
        [fetchUser.pending]: (state, action) => {
            state.userDetail.message = action.meta.requestStatus
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.userDetail = action.payload
        },
        [fetchUser.rejected]: (state, action) => {
            state.userDetail.message = action.error.message
        },
    }
})

export default cartSlice.reducer