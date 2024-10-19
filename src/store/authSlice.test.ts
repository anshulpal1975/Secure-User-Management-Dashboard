// src/store/authSlice.test.ts
import authReducer, { register, login, logout } from './authSlice';

describe('Auth Slice', () => {
    const initialState = { user: null };

    it('should register a user', () => {
        const user = { name: 'John Doe', email: 'john@example.com', password: 'password123' };
        const action = register(user);
        const state = authReducer(initialState, action);
        expect(state.user).toEqual(user);
    });

    it('should log in a user', () => {
        const user = { name: 'John Doe', email: 'john@example.com', password: 'password123' };
        const stateWithUser = authReducer(initialState, register(user));
        const loginAction = login(user);
        const loggedInState = authReducer(stateWithUser, loginAction);
        expect(loggedInState.user).toEqual(user);
    });

    it('should log out a user', () => {
        const user = { name: 'John Doe', email: 'john@example.com', password: 'password123' };
        const stateWithUser = authReducer(initialState, register(user));
        const logoutAction = logout();
        const loggedOutState = authReducer(stateWithUser, logoutAction);
        expect(loggedOutState.user).toBeNull();
    });

    it('should not log in with invalid credentials', () => {
        const user = { name: 'John Doe', email: 'john@example.com', password: 'password123' };
        const stateWithUser = authReducer(initialState, register(user));
        const invalidLoginAction = login({
            email: 'john@example.com', password: 'wrongpassword',
            name: ''
        });
        const resultState = authReducer(stateWithUser, invalidLoginAction);
        expect(resultState.user).toEqual(user); 
    });
});
