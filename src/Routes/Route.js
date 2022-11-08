import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('https://web-development-course-seven.vercel.app/new-courses')
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Signup></Signup>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },

            // {
            //     path: '/details/:id',
            //     element: <CourseDetails></CourseDetails>,
            //     loader: ({ params }) => fetch(`https://web-development-course-seven.vercel.app/course-details/${params.id}`)
            // },
            {
                path: '*',
                element: <div className='not-found w-75 h-25 container'>Sorry ! This page is not found(404)</div>
            }

        ]
    }
])