import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  template: string
}

const initialState: AppState = {
  template: 'template1'
}

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Resume>) => {
      state = {
        ...action.payload,
        ...state
      }
    }
  },
})

export const { 
  update
} = AppSlice.actions

export default AppSlice.reducer