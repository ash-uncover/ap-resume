import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  loaded: boolean
  template: string
}

const initialState: AppState = {
  loaded: false,
  template: 'template1'
}

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<ModelResume>) => {
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