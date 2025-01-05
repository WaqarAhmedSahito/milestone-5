"use client";

export default function Home() {
  return (
    <div className="bg-gray-800 p-4 min-h-screen">
      <h1 className="text-6xl font-bold text-white text-center mb-6">Resume Builder</h1>
      <h1 className="text-5xl font-bold text-white text-center mb-16">milestone 5</h1>
      <div className="flex justify-center items-center space-x-2 flex-wrap">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
          <a href="/login">Login</a>
        </button>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
          <a href="/register">Register</a>
        </button>
      </div>
    </div>
  );
}
