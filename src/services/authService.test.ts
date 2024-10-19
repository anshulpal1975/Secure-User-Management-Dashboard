import axios from 'axios';
import { loginUser } from './authService'; 

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Auth Service', () => {
    it('should successfully log in a user', async () => {
        const userCredentials = { email: 'john@example.com', password: 'password123' };
        const response = { data: { name: 'John Doe', email: 'john@example.com' } };

        mockedAxios.post.mockResolvedValue(response);

        const result = await loginUser(userCredentials);

        expect(mockedAxios.post).toHaveBeenCalledWith('/api/login', userCredentials);
        expect(result).toEqual(response.data);
    });

    it('should handle login error', async () => {
        const userCredentials = { email: 'john@example.com', password: 'password123' };
        const errorMessage = 'Invalid credentials';

        mockedAxios.post.mockRejectedValue(new Error(errorMessage));

        await expect(loginUser(userCredentials)).rejects.toThrow(errorMessage);
    });
});
