import {createSlice, nanoid} from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        storeTask: (state, action) => {
            const task = {id: nanoid(), task: action.payload}
            state.tasks.push(task)
        },

        removeTask: (state, action) => {
           const idNeedToRemoveTask = action.payload
            state.tasks = state.tasks.filter(task => task.id !== idNeedToRemoveTask)
        }
    }
})

export const {storeTask, removeTask} = taskSlice.actions

export default taskSlice.reducer
