import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store'; 
import Auth from './Auth'; 

describe('Auth', () => {
    it('renders learn react link', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Auth />
            </Provider>
        );

        expect(getByText(/learn react/i)).toBeInTheDocument(); 
    });
});
