import { IAPIResponse, ILoginResponse, IUser, IUserState } from '@/models/store'
import {
  ActionReducerMapBuilder,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'

const initialState: IUserState = {
  user: null,
  error: null,
  id: null,
}

export const fetchUser = createAsyncThunk(
  'user/fetchUser',

  async () => {
    const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
      method: 'POST',
      body: null,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
    return await response.json()
  },
)

export const changeUserName = createAsyncThunk(
  'user/changeUserName',

  async ({ userName }: { userName: string }) => {
    const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
      method: 'PUT',
      body: JSON.stringify({ userName }),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
    return await response.json()
  },
)

export const loginUser = createAsyncThunk(
  'user/loginUser',

  async ({ email, password }: { email: string; password: string }) => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-type': 'application/json' },
    })
    return await response.json()
  },
)

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signOut(state) {
      state.user = null
      localStorage.removeItem('token')
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IUserState>) => {
    builder.addCase(
      fetchUser.fulfilled,
      (state: IUserState, { payload }: PayloadAction<IAPIResponse<IUser>>) => {
        state.user = payload.body
      },
    )
    builder.addCase(
      loginUser.fulfilled,
      (
        _: IUserState,
        { payload }: PayloadAction<IAPIResponse<ILoginResponse>>,
      ) => {
        if (payload.status !== 200) {
          throw new Error(payload.message)
        }
        if (payload?.body?.token) {
          localStorage.setItem('token', payload.body.token)
        }
      },
    )
    builder.addCase(
      changeUserName.fulfilled,
      (state: IUserState, { payload }: PayloadAction<IAPIResponse<IUser>>) => {
        if (payload.body.userName) {
          state.user!.userName = payload.body.userName
        }
      },
    )
  },
})

export const { signOut } = userSlice.actions

export default userSlice.reducer
