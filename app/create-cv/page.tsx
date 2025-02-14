"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Navbar from "@/app/component/Navbar";

const Page: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    linkedin: "",
    summery: "",
    education: "",
    description: "",
    completed: "",
    experience: "",
    position: "",
    description2: "",
    skills1: "",
    skills2: "",
    skills3: "",
    profileImage: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, files } = e.target as HTMLInputElement;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string; 
        setFormData({
          ...formData,
          [id]: base64String, 
        });
      };
      reader.readAsDataURL(file); 
    } else { 
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("resumeData", JSON.stringify(formData));
    router.push("/preview");
  };
  const { isSignedIn, isLoaded } = useUser();
  useEffect(() => {
    if (!isSignedIn && isLoaded) {
      router.push("/auth/sign-in");
    }
  }, [isSignedIn, isLoaded, router]);

  if (!isLoaded) return <p>Loading...</p>;
  return (
    <div className=" min-h-screen p-5">
      <Navbar />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 lg:mb-12 xl:text-6xl">Dynamic Resume Builder</h1>
      <div className="bg-white flex flex-col max-w-5xl mx-auto p-6 shadow-lg rounded-lg">
        <form id="resume-form" onSubmit={handleSubmit}>
          <fieldset className="flex flex-col border-2 border-gray-300 bg-gray-50 mt-3 p-6 rounded-lg shadow-md">
            <legend className="font-bold text-center text-xl md:text-2xl mb-4 text-gray-700">
              Personal Information
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-700" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name..."
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="gender">
                  Gender:
                </label>
                <input
                  type="text"
                  id="gender"
                  placeholder="Enter your gender..."
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="phone">
                  Phone:
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number..."
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email..."
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-gray-700" htmlFor="linkedin">
                  LinkedIn URL:
                </label>
                <input
                  type="text"
                  id="linkedin"
                  placeholder="Enter your LinkedIn URL..."
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.linkedin}
                  onChange={handleChange}
                  required
                />
              </div>
          <div>   
          <label className="text-gray-700" htmlFor="file_input">
        Upload file
      </label>
      <input
        className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        aria-describedby="file_input_help"
        id="profileImage"
        type="file"
        accept="image/*"
        onChange={handleChange}
        required
      />
      {formData.profileImage && (
        <div className="mt-4">
          <img
            src={formData.profileImage}
            alt="Selected Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
      )}
        </div>
      </div>
      </fieldset>  
        <fieldset className="flex flex-col border-2 border-gray-300 bg-gray-50 mt-4 p-6 rounded-lg shadow-md">
            <legend className="font-bold text-center text-xl md:text-2xl mb-4 text-gray-700">
              Summary
            </legend>
            <textarea
              id="summery"
              placeholder="Describe yourself..."
              className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
              value={formData.summery}
              onChange={handleChange}
              required
            ></textarea>
          </fieldset>

          <fieldset className="flex flex-col border-2 border-gray-300 bg-gray-50 mt-4 p-6 rounded-lg shadow-md">
            <legend className="font-bold text-center text-xl md:text-2xl mb-4 text-gray-700">
              Education
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-700" htmlFor="education">
                  Department:
                </label>
                <input
                  type="text"
                  id="education"
                  placeholder="Enter your department..."
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.education}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="completed">
                  Completed:
                </label>
                <input
                  type="date"
                  id="completed"
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.completed}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-gray-700" htmlFor="description">
                  Description:
                </label>
                <textarea
                  id="description"
                  placeholder="Description..."
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
          </fieldset>

          <fieldset className="flex flex-col border-2 border-gray-300 bg-gray-50 mt-4 p-6 rounded-lg shadow-md">
            <legend className="font-bold text-center text-xl md:text-2xl mb-4 text-gray-700">
              Experience
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-700" htmlFor="experience">
                  Company:
                </label>
                <input
                  type="text"
                  id="experience"
                  placeholder="Enter company name..."
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-gray-700" htmlFor="position">
                  Position:
                </label>
                <input
                  type="text"
                  id="position"
                  placeholder="Enter your position..."
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.position}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-gray-700" htmlFor="description2">
                  Description:
                </label>
                <textarea
                  id="description2"
                  placeholder="Describe your experience..."
                  className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.description2}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
          </fieldset>

          <fieldset className="flex flex-col border-2 border-gray-300 bg-gray-50 mt-4 p-6 rounded-lg shadow-md">
            <legend className="font-bold text-center text-xl md:text-2xl mb-4 text-gray-700">
              Skills
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <input
                type="text"
                id="skills1"
                placeholder="Skill 1"
                className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                value={formData.skills1}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="skills2"
                placeholder="Skill 2"
                className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                value={formData.skills2}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="skills3"
                placeholder="Skill 3"
                className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                value={formData.skills3}
                onChange={handleChange}
                required
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md w-full sm:w-auto transition-colors duration-300"
          >
            Build Resume
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
