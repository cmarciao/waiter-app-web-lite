import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Orders } from './pages/Orders';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Orders />
    }
]);

export function Router() {
    return <RouterProvider router={router} />;
}
