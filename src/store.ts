import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./features/tasks-slice";

const store = configureStore({
    reducer : {
        tasks : taskReducer
    }
})
export default store;