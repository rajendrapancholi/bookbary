import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { mutate, status, isError, error } = useAuth();
    const isLoading = status === 'pending';
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData, {
            onSuccess: (data) => {
                toast.success(`Welcome back, ${data.user.name || "User"}! 🎉`);
                if (data.user.isAdmin) {
                    navigate('/admin');
                } else {
                    navigate('/user');
                }
            },
            onError: (error) => {
                toast.error((error as Error).message);
            },
        });
    };

    return (
        <div className='flex mx-auto h-full w-full'>
            <div className="flex flex-1/2 flex-col my-3 justify-center items-center h-full">
                <div className='text-sm flex flex-col gap-4 justify-center items-center'>
                    <img src="/logo.png" alt="BookBary" className='size-20' />
                    <h1 className='text-4xl dark:text-gray-100'>Welcome Back!!</h1>
                    <p className='text-sm mt-2 dark:text-gray-300'>Please enter your credentials to log in</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="p-8 rounded-lg w-96"
                >
                    {isError && (
                        <p className="text-red-500">{(error as Error).message}</p>
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 dark:text-gray-100 outline-none ring ring-gray-500 dark:ring-gray-300 rounded-xl dark:placeholder:text-gray-400/60"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        className="w-full p-3 mb-4 dark:text-gray-100 outline-none ring ring-gray-500 dark:ring-gray-300 rounded-xl dark:placeholder:text-gray-400/60"
                    />
                    <NavLink to='/forget-password' className="dark:text-gray-100 text-md hover:underline mb-2 block">
                        Forgot password?
                    </NavLink>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-btn text-white p-2 rounded-lg cursor-pointer text-lg font-bold"
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>

            <div className='flex flex-1/2 justify-center items-center text-white bg-neutral-600 dark:bg-neutral-800 rounded-l-4xl'>
                <div className="flex flex-1/2 flex-col gap-16 justify-center items-center h-full">
                    <div className='text-sm flex flex-col justify-center items-center'>
                        <img src="/logo.png" alt="BookBary" className='size-20 mb-3' />
                        <h1 className='text-6xl font-bold bg-clip-text text-transparent bg-gradient'>BookBary</h1>
                        <p className='text-xl font-mono font-bold -mt-1 bg-clip-text text-transparent bg-gradient'>Library</p>
                    </div>
                    <div className='flex justify-center gap-4 items-center flex-col'>
                        <p className='text-md mt-2 dark:text-gray-300'>New to our platform? Sign Up now</p>
                        <NavLink to='/sign-up' className="text-center ring-1 ring-neutral-300 hover:ring-0 w-full bg-gradient-btn text-white p-2 rounded-lg cursor-pointer text-lg font-bold hover-scale-right-top-bottom">
                            Sign Up
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;;
