import React, { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface ProtectedRouteProps {
    children: JSX.Element;
    isAdminRoute?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    isAdminRoute = false,
}) => {
    const { isAuthenticated, user } = useSelector(
        (state: RootState) => state.auth
    );

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (isAdminRoute && (!user || !user.isAdmin)) {
        return <Navigate to="/user/" />;
    }
    return children;
};

export default ProtectedRoute;

