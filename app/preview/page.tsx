"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Navbar from "@/app/component/Navbar";
interface ResumeData {
    name: string;
    gender: string;
    email: string;
    phone: string;
    linkedin: string;
    summery: string;
    education: string;
    description: string;
    completed: string;
    experience: string;
    position: string;
    description2: string;
    skills1: string;
    skills2: string;
    skills3: string;
    profileImage: string;
}

const PreviewPage = () => {

    const [resumeData, setResumeData] = useState<ResumeData | null>(null);
    const { isSignedIn, isLoaded } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!isSignedIn) {
            router.push("/auth/sign-in");
        }

        const savedData = localStorage.getItem("resumeData");
        if (savedData) {
            setResumeData(JSON.parse(savedData));
        } else {
            router.push("/");
        }
    }, [isSignedIn, isLoaded, router]);

    const handleDownload = () => {
        const printContents = document.getElementById('resume-print')?.innerHTML;
        if (!printContents) return; 
        const iframe = document.createElement('iframe');
        iframe.style.position = 'absolute';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = 'none';
        document.body.appendChild(iframe);
      
        const doc = iframe.contentWindow?.document;
        
        if (doc) {
          doc.open();
          doc.write(`
            <html>
              <head>
                <title>Print</title>
                <style>
                  /* Custom styles for the print version */
                  body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                  }
      
                  /* Round and small image styling */
                  img {
                    width: 100px; /* Adjust size */
                    height: 100px;
                    border-radius: 50%; /* Round image */
                    object-fit: cover; /* Ensure it fits properly */
                  }
                </style>
              </head>
              <body>${printContents}</body>
            </html>
          `);
          doc.close();
      
          iframe.contentWindow?.focus();
          iframe.contentWindow?.print();
      
          iframe.remove();
        }
      };
      
    if (!isLoaded || !resumeData) return <p>Loading...</p>;
    return (
        <div className="min-h-screen p-5 bg-gray-50">
            <Navbar />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
                Your Resume Preview
            </h1>
            <div id="resume-print" className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-300">
                <div >
                    <div className="flex items-center mb-8 pb-4 border-b-2 border-black">
                        <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
                            {resumeData.profileImage && (
                                <img
                                    src={resumeData.profileImage}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full object-cover"
                                />
                            )}
                        </div>
                        <div className="ml-6">
                            <h1 className="text-3xl font-bold text-gray-800">{resumeData.name}</h1>
                            <p className="text-gray-600">{resumeData.gender}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className="mb-8">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 border-black border-b-2 pb-4 mr-8">Contact</h2>
                                <div className="space-y-2">
                                    <p className="text-gray-700">
                                        <strong>Email:</strong> {resumeData.email}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Phone:</strong> {resumeData.phone}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>LinkedIn:</strong> {resumeData.linkedin}
                                    </p>
                                </div>
                            </div>
                            <div className="mb-8">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 border-black border-b-2 pb-4 mr-8">Skills</h2>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li className="text-gray-700">{resumeData.skills1}</li>
                                    <li className="text-gray-700">{resumeData.skills2}</li>
                                    <li className="text-gray-700">{resumeData.skills3}</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                        <div className="mb-8">
  <h2 className="text-xl font-bold text-gray-800 mb-4 border-black border-b-2 pb-4 ">About Me</h2>
  <p className="text-gray-700 text-justify"> {/* Add text-justify */}
    {resumeData.summery}
  </p>
</div>
                            <div className="mb-8">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 border-black border-b-2 pb-4 mr-8">Education</h2>
                                <div className="space-y-2">
                                    <p className="text-gray-700">
                                        <strong>Department:</strong> {resumeData.education}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Description:</strong> {resumeData.description}
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Completed:</strong> {resumeData.completed}
                                    </p>
                                </div>
                            </div>
                            <div className="mb-8 w-full">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 border-black border-b-2 pb-4 mr-8">Experience</h2>
                                <div className="space-y-2 w-full">
                                    <p className="text-gray-700 break-words">
                                        <strong>Company:</strong> {resumeData.experience}
                                    </p>
                                    <p className="text-gray-700 break-words">
                                        <strong>Position:</strong> {resumeData.position}
                                    </p>
                                    <p className="text-gray-700 break-words whitespace-normal">
                                        <strong>Description:</strong> {resumeData.description2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button
                    onClick={handleDownload}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md"
                >
                    Download Resume
                </button>
            </div>
        </div>
    );
};

export default PreviewPage;