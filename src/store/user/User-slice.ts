import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserReducer{
    currentUser: User | null,
    isAuthenticated: boolean
}
const initialState :UserReducer ={
    currentUser: User | null,
    isAuthenticated:false
}

const userSlice = createSlice({
    name:'user'
    initialState,
    reducers{

    }
})

export const{} = userSlice.reducer
export default userSlice.actions