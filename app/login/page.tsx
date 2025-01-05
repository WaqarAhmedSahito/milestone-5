"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your authentication logic here
        if (email === 'user@example.com' && password === 'password') {
            router.push('/create-cv');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl mb-6">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-6 flex justify-center items-center flex-col space-y-2">
                <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Login
                </button>
                <p className='text-center '>---New Here---</p>
                <button
                    type="button"
                    className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={() => router.push('/register')}
                >
                    Register
                </button></div>
            </form>
        </div>
    );
};

export default LoginPage;
