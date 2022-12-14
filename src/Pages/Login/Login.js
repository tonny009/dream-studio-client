import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logImg from '../../assets/login.jpg'
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';

import './Login.css'

const Login = () => {

    useTitle('DS/Login')

    const [error, setError] = useState('');
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider()
    const { providerLogin, signIn, setLoading } = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Successfully loged in!')
                const currentUser = {
                    email: user.email
                }

                //get jwt token
                fetch('https://photography-service-review-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        localStorage.setItem('genius-token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.error(error)
                setError("Please Give a valid Password and email.");
            })
            .finally(() => {
                setLoading(false);
            })
    }


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                // console.log(user)
            })
            .catch(error => {
                console.error()
                setError(error.message);
            })

    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content ml-20 grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={logImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold clr">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <p><strong className='fs-5 text-red-600'>{error}</strong></p>

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className="form-control mt-6">

                            <Button className='login-others-btn loginbtn' onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle></FaGoogle>  Log in With Google</Button>
                        </div>
                    </form>


                    <p className='text-center'>New to Dream Studio? <Link className='text-orange-600 font-bold' to="/register">Sign Up</Link> </p>

                </div>
            </div>
        </div>

    );

};

export default Login;