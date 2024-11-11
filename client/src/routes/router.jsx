import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AdminRoute, UserRoute, SellerRoute } from './ProtectedRoutes';

// layouts
import UserLayout from '../layouts/UserLayout';
import NewProductForm from '../layouts/NewProductForm';
import SellerLayout from '../layouts/SellerLayout';
import AdminLayout from '../layouts/AdminLayout';
import AuthForm from '../layouts/AuthForm';

// pages
import Login from '../pages/Login';
import Register from '../pages/Register'
import Home from '../pages/Home';

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
                <UserLayout/>
            </UserRoute>
        ),
        children: [
            {
                path : '',
                element : <Home />
            },
            {
                path : '/profile',
                element : <div>User dashboard</div>
            },
        ]
    },

    // Seller Dashboard Route ⏳
    {
        path : '/seller',
        element : (
            <SellerRoute>
                <SellerLayout/>
            </SellerRoute>
        ),
        children : [
            {
                path : '',
                element : <div>Seller dashboard</div>
            },
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
                <AdminLayout/>
            </AdminRoute>
        ),
        children : [
            {
                path : '',
                element : <div>Admin dashboard</div>
            }
        ]
    },

    // Fallback Route
    {
        path : '*',
        element : <Navigate to="/auth" />
    }
]);

export default router;
