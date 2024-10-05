import { createBrowserRouter } from 'react-router-dom';
import Index from '../pages/Index';
import About from '../pages/About';
import RootLayout from '../pages/RootLayout';

// export const router = createBrowserRouter([
//     {
//         path : '/',
//         element : <Index />,
//     },
//     {
//         path : '/about',
//         element : <About />,
//     },
// ])

export const router = createBrowserRouter([
    {
        path : '/',
        element : <RootLayout />,
        children : [
            {
                path : '/',
                element : <Index />,
            },
            {
                path : '/about',
                element : <About />,
            },
        ]
    }
])