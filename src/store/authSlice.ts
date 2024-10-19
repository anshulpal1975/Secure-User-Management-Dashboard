import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    name: string;
    email: string;
    password: string;
}

interface AuthState {
    user: User | null;
}

const initialState: AuthState = {
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        login: (state, action: PayloadAction<User>) => {
            if (state.user?.email === action.payload.email && state.user.password === action.payload.password) {
                state.user = action.payload;
            }
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
