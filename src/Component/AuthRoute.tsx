import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const user = useSelector((state: any) => state.auth.user);

    if (!user) {
        // If not authenticated, redirect to login
        return <Navigate to="/" />;
    }

    // If authenticated, render the children (protected route)
    return <>{children}</>;
};

export default AuthRoute;
