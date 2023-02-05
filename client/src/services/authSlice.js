//This code was adapted from:
// https://github.com/bradtraversy/mern-tutorial/blob/main/frontend/src/features/auth/authSlice.js


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  //if there is a user in user storage, then that will be used- if not set to null  
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await userService.register(user)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await userService.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// export const logout = createAsyncThunk('auth/logout', async () => {
//   await userService.logout()
// })

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },

  //this deals with the async funcs
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
    //   .addCase(login.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(login.fulfilled, (state, action) => {
    //     state.isLoading = false
    //     state.isSuccess = true
    //     state.user = action.payload
    //   })
    //   .addCase(login.rejected, (state, action) => {
    //     state.isLoading = false
    //     state.isError = true
    //     state.message = action.payload
    //     state.user = null
    //   })
    //   .addCase(logout.fulfilled, (state) => {
    //     state.user = null
    //   })
  }
})

export const { reset } = authSlice.actions
export default authSlice.reducer