import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./features/tasks-slice";

const store = configureStore({
    reducer : {
        tasks : taskReducer
    }
})
export type ApplicationState = ReturnType<typeof store.getState>
export default store;