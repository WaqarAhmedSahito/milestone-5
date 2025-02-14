import { useUser, SignOutButton } from "@clerk/nextjs"; 
import Link from "next/link";
import React, { Suspense } from "react";
const HeaderComponent = () => {
  const { user, isSignedIn } = useUser(); 
  return (
    <nav className="flex justify-between sticky top-0 bg-gray-50 z-10 border-[1px] border-gray-300 items-center px-4 sm:px-6 h-14">
      <div className="flex justify-between items-center gap-8">  
      </div>
      {isSignedIn ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{user.firstName} {user.lastName}</span>
          </div>
          <SignOutButton>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Logout
            </button>
          </SignOutButton>
        </div>
      ) : (
        <Link
          href="/signin"
          className="flex items-center justify-center gap-1 rounded-full bg-gray-900 text-white px-4 py-2"
        >
          Get Started
        </Link>
      )}
    </nav>
  );
};
export default function Header() {
  return (
    <Suspense
      fallback={
        <nav className="flex justify-between items-center px-6 h-14 animate-pulse">
          <div className="flex justify-between items-center gap-4">
            <div className="h-10 w-20 bg-gray-300 rounded"></div>
            <div className="h-8 w-32 bg-gray-300 rounded"></div>
          </div>
          <div className="h-8 w-24 bg-gray-300 rounded"></div>
        </nav>
      }
    >
      <HeaderComponent />
    </Suspense>
  );
}
