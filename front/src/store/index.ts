import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/store/user'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
