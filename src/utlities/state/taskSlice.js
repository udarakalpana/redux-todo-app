import {createSlice} from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        storeTask: () => {

        }
    }
})

export const {storeTask} = taskSlice.actions

export default taskSlice.reducer
