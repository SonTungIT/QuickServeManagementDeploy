import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginEndpoint } from '../api/apiConfig';
import { toast } from 'react-toastify';
import { ILogin, ILoginResponse, IUser } from '../../models/Auth';

type AccountState = {
    loading: boolean;
    account: IUser | null;
    error: string[] | unknown;
    success: boolean;
};

const initialState: AccountState = {
    loading: false,
    account: null,
    error: null,
    success: false,
};

export const loginUser = createAsyncThunk<ILoginResponse, ILogin>(
    'auth/loginUser',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(loginEndpoint, data);
            const token = response.data.data.accessToken;
            localStorage.setItem('quickServeToken', token);
            toast.success('Login successfully!');
            return response.data;
        } catch (error: any) {
            toast.error('Login failed!');
            return thunkAPI.rejectWithValue(error.response.data);
        }
    },
);
export const logoutUser = createAsyncThunk<ILoginResponse| null, string | Object>(
    'auth/logout-user',
    async (_, thunkAPI) => {
        try {
            localStorage.removeItem('quickServeToken');
            toast.success('Đăng xuất thành công !');
            return null;
        } catch (error: any) {
            toast.error('Đăng xuất không thành công !');
            return thunkAPI.rejectWithValue(error.response.data);

        }
    },
);

export const authSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.account = action.payload.data;
            state.success = true;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { setError } = authSlice.actions;
export default authSlice.reducer;
