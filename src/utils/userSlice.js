import { createSlice} from "@reduxjs/toolkit";
const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser: (state, action) => {
            return action.payload
        },
        removeUser: (state,action) => {
            return null;

        }
    }//in slice it is reducers and in store its reducer
})

export const{addUser, removeUser} = userSlice.actions

export default userSlice.reducer