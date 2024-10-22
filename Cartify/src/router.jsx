import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './views/Login';
import PageLayout from './templates/PageLayout';
import Register from './views/Register'
import CenteredForm from './templates/CenteredForm';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './templates/Home';
import NewProductForm from './templates/NewProductForm';

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
                <PageLayout/>
            </ProtectedRoute>
        ),
        children: [
            {
                path : '/',
                element : <Home />
            },
            {
                path : '/seller/add-product',
                element : <NewProductForm/>
            }
        ]
    },
    {
        path : '*',
        element : <Navigate to="/auth" />
    }
]);

export default router;
