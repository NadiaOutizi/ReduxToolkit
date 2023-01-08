import { configureStore } from '@reduxjs/toolkit'
import PostsSlice from './postsSlice'

export const store = configureStore({
  reducer: {
    posts:PostsSlice
  },
})