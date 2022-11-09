import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from '../Routes/PrivateRoute'
import MyReviews from "../Pages/MyReviews/MyReviews";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Signup from "../Pages/Signup/Signup";
import Services from "../Pages/Services/Services";
import CommentForm from '../Pages/CommentForm/CommentForm'

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
                path: '/home',
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
            {
                path: 'services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: 'myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: 'addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: 'servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/service-details/${params.id}`)
            },
            {
                path: 'commentform/:id',
                element: <PrivateRoute><CommentForm></CommentForm></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/service-details/${params.id}`)



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