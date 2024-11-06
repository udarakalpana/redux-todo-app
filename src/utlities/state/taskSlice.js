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
        }
    }
})

export const {storeTask} = taskSlice.actions

export default taskSlice.reducer
