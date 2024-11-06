import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './utlities/state/taskSlice.js'

export default configureStore({
    reducer: {
        tasks: taskReducer
    },
})