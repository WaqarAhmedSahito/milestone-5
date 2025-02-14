"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
const LoginPage: React.FC = () => {
    const { isSignedIn } = useUser();
    const router = useRouter();
    useEffect(() => {
        if (isSignedIn) {
            router.push("/create-cv"); 
        }
    }, [isSignedIn, router]);
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-blue-700 text-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl mb-6">Login</h2>
                <p className=" mb-6">Welcome back! Please log in to your account to access your personalized dashboard and start exploring. If you don&apos;t have an account, feel free to sign up and get started!</p>
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="w-full py-2 bg-gray-800 text-white rounded hover:bg-gray-600">Login 
                        </button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <p className="text-center text-green-500">You are already logged in!</p>
                </SignedIn>
            </div>
        </div>
    );
};
export default LoginPage;