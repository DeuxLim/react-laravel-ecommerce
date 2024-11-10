import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import PageLayout from '../layouts/PageLayout';
import Register from '../pages/Register'
import AuthForm from '../layouts/AuthForm';
import { AdminRoute, UserRoute, SellerRoute } from './ProtectedRoutes';
import Home from '../pages/Home';
import NewProductForm from '../layouts/NewProductForm';

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

    // User Dashboard route ⏳
    {
        path : '/',
        element : (
            <UserRoute>
                <PageLayout/>
            </UserRoute>
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
        element : (
            <SellerRoute>
                <PageLayout/>
            </SellerRoute>
        ),
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
        element :(
            <AdminRoute>
                <PageLayout/>
            </AdminRoute>
        )
    },

    // Fallback Route
    {
        path : '*',
        element : <Navigate to="/auth" />
    }
]);

export default router;
