import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './views/Login';
import DefaultLayout from './views/DefaultLayout';
import Register from './views/Register'
import CenteredForm from './templates/CenteredForm';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
    {
        path : '/auth',
        element : <CenteredForm/>,
        children: [
            {
                path : '',
                element : <Login/>
            },
            {
                path : 'register',
                element : <Register/>
            },
        ]
    },
    {
        path : '/',
        element : (
            <ProtectedRoute>
                <DefaultLayout/>
            </ProtectedRoute>
        ),
    },
    {
        path : '*',
        element : <Navigate to="/auth" />
    }
]);

export default router;
