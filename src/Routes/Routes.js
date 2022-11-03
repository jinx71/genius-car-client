import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home';
import Main from '../Layout/Main';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        loader: ({ params }) => fetch('http://localhost:3001'),
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ({ params }) => fetch('http://localhost:3001'),
            },
        ]
    },
    {
        path: "*",
        element: <div>Not Found</div>
    },
])
export default router;