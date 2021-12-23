import { createSlice } from '@reduxjs/toolkit'

const initialState = { email: '', name: '', profileUrl: '' }

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {},
})

export default userInfoSlice.reducer
