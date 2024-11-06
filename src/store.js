import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import taskReducer from './utlities/state/taskSlice.js'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, taskReducer)
export const store =  configureStore({
    reducer: {
        tasks: persistedReducer
    },
})

export const persistor = persistStore(store)