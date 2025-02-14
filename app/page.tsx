"use client";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center p-6">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold 
      text-center mb-4">
        Resume Builder
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-purple-400 text-center mb-8">
        Milestone 5
      </h2>

      {/* Description Paragraph */}
      <p className="text-lg md:text-xl text-center max-w-2xl mb-12">
        Create a professional resume that gets you noticed! Our Resume Builder helps you craft a
        tailored CV that highlights your skills, experience, and achievements. Whether you&apos;re a
        seasoned professional or just starting out, we&apos;ve got you covered.
      </p>

      {/* Call-to-Action Button */}
      <div className="flex justify-center items-center">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
          <a href="/auth/sign-in">Get Started</a>
        </button>
      </div>

      {/* Additional Section for CV Example */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          A CV That Gets You Hired
        </h3>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Your resume is your first impression. Make it count! With our easy-to-use tools, you can
          create a CV that stands out to employers and lands you the job you deserve.
        </p>
      </div>
    </div>
  );
}