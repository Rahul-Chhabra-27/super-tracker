import { ActionCreatorWithPayload, PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export type TasksState = {
    entities : Task[]
};

const initialState : TasksState = { 
    entities:[]
 }
// type DraftTask =  Partial<Task>
type DraftTask = RequireOnly<Task,'title'>

type FunExperimentType = RequireOnly<Task,'title' | 'id'>
const ExterimentType : FunExperimentType = { title: 'lol', id : '20' }

const createTask = (draftTask : DraftTask) : Task => {
    return { id:nanoid(), ...draftTask }
}

 const tasksSlice =  createSlice({
    name:'tasks',
    initialState,
    reducers:{
        // Bunch of actions, we need action with payload
        addTask : (state,action : PayloadAction< /*  Task */ DraftTask>) => {
            const task = createTask(action.payload);
            // state.entities.unshift(action.payload)
            state.entities.unshift(task);
        },
        removeTask : (state, action) => state
    }
 });
export const taskReducer = tasksSlice.reducer; 
export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice;




//  {
//     type : 'Hey'
//     payload : {
        // task : Task
//     }
//  }