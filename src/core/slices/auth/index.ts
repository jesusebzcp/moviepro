import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from './types';

interface AuthSlice {
  loading: boolean;
  user: null | User;
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    loading: false,
    user: null,
  } as AuthSlice,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
  },
});

export const {setLoading, setUser} = authSlice.actions;
export default authSlice.reducer;
