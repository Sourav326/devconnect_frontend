import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"

const appStore = configureStore({
    reducer:{
        user:userReducer

    }//in store it is reducer and in slice its reducers

})

export default appStore