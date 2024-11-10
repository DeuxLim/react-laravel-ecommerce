import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import PageLayout from './layouts/PageLayout';
import Register from './pages/Register'
import AuthForm from './layouts/AuthForm';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import NewProductForm from './layouts/NewProductForm';

const router = createBrowserRouter([
    // Authentication Routes ✅ 
    {
        path : '/auth',
        element : <AuthForm/>,
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

    // Main Dashboard route ⏳
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
        ]
    },

    // Seller Dashboard Route ⏳
    {
        path : '/seller',
        element : <div> seller page </div>,
        children : [
            {
                path : 'new-product',
                element : <NewProductForm/>
            }
        ]
    },

    // Admin Dashboard Route ⏳
    {
        path : '/admin',
        element : <div> admin page </div>
    },

    // Fallback Route
    {
        path : '*',
        element : <Navigate to="/auth" />
    }
]);

export default router;
