"use client";
import React, { useState } from "react";
import jsPDF from "jspdf";

const Page: React.FC = () => {
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
  });
  const [resumeData, setResumeData] = useState<typeof formData | null>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResumeData(formData);
  };
  const handleDownload = () => {
    
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("Resume", 105, 20, { align: "center" });

    doc.setFontSize(16);
    doc.text("Personal Information", 10, 40);
    doc.setFontSize(12);
    doc.text(`Name: ${resumeData?.name}`, 10, 50);
    doc.text(`Phone: ${resumeData?.phone}`, 10, 60);
    doc.text(`Email: ${resumeData?.email}`, 10, 70);
    doc.text(`LinkedIn: ${resumeData?.linkedin}`, 10, 80);

    doc.setFontSize(16);
    doc.text("Skills", 10, 100);
    doc.setFontSize(12);
    doc.text(`- ${resumeData?.skills1}`, 10, 110);
    doc.text(`- ${resumeData?.skills2}`, 10, 120);
    doc.text(`- ${resumeData?.skills3}`, 10, 130);

    doc.setFontSize(16);
    doc.text("Brief Introduction", 10, 150);
    doc.setFontSize(12);
    doc.text(resumeData?.summery || "", 10, 160);

    doc.setFontSize(16);
    doc.text("Education", 10, 180);
    doc.setFontSize(12);
    doc.text(`Department: ${resumeData?.education}`, 10, 190);
    doc.text(`Description: ${resumeData?.description}`, 10, 200);
    doc.text(`Completed: ${resumeData?.completed}`, 10, 210);

    doc.setFontSize(16);
    doc.text("Experience", 10, 230);
    doc.setFontSize(12);
    doc.text(`Company: ${resumeData?.experience}`, 10, 240);
    doc.text(`Position: ${resumeData?.position}`, 10, 250);
    doc.text(`Description: ${resumeData?.description2}`, 10, 260);

    doc.save("resume.pdf");
};

  return (
    <div className="bg-gray-900 min-h-screen p-5">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white">
        Dynamic Resume Builder
      </h1>
      <div className="bg-gray-200 flex flex-col max-w-4xl mx-auto p-6 shadow-lg rounded-lg">
        <form id="resume-form" onSubmit={handleSubmit}>
          <fieldset className="flex flex-col border-2 border-black bg-gray-100 mt-3 p-4 rounded-lg">
            <legend className="font-bold text-center text-xl md:text-2xl mb-4">
              Personal Information
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-black" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name..."
                  className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-black" htmlFor="gender">
                  Gender:
                </label>
                <input
                  type="text"
                  id="gender"
                  placeholder="Enter your gender..."
                  className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-black" htmlFor="phone">
                  Phone:
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number..."
                  className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-black" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email..."
                  className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-black" htmlFor="linkedin">
                  LinkedIn URL:
                </label>
                <input
                  type="text"
                  id="linkedin"
                  placeholder="Enter your LinkedIn URL..."
                  className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.linkedin}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="flex flex-col border-2 border-black bg-gray-100 mt-4 p-4 rounded-lg">
            <legend className="font-bold text-center text-xl md:text-2xl mb-4">
              Summary
            </legend>
            <textarea
              id="summery"
              placeholder="Describe yourself..."
              className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
              value={formData.summery}
              onChange={handleChange}
              required
            ></textarea>
          </fieldset>
          <fieldset className="flex flex-col border-2 border-black bg-gray-100 mt-4 p-4 rounded-lg">
            <legend className="font-bold text-center text-xl md:text-2xl mb-4">
              Education
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-black" htmlFor="education">
                  Department:
                </label>
                <input
                  type="text"
                  id="education"
                  placeholder="Enter your department..."
                  className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.education}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-black" htmlFor="completed">
                  Completed:
                </label>
                <input
                  type="date"
                  id="completed"
                  className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.completed}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-black" htmlFor="description">
                  Description:
                </label>
                <textarea
                  id="description"
                  placeholder="Description..."
                  className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
          </fieldset>
          <fieldset className="flex flex-col border-2 border-black bg-gray-100 mt-4 p-4 rounded-lg">
            <legend className="font-bold text-center text-xl md:text-2xl mb-4">
              Experience
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-black" htmlFor="experience">
                  Company:
                </label>
                <input
                  type="text"
                  id="experience"
                  placeholder="Enter company name..."
                  className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-black" htmlFor="position">
                  Position:
                </label>
                <input
                  type="text"
                  id="position"
                  placeholder="Enter your position..."
                  className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.position}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-black" htmlFor="description2">
                  Description:
                </label>
                <textarea
                  id="description2"
                  placeholder="Describe your experience..."
                  className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.description2}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
          </fieldset>
          <fieldset className="flex flex-col border-2 border-black bg-gray-100 mt-4 p-4 rounded-lg">
            <legend className="font-bold text-center text-xl md:text-2xl mb-4">
              Skills
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                id="skills1"
                placeholder="Skill 1"
                className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                value={formData.skills1}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="skills2"
                placeholder="Skill 2"
                className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                value={formData.skills2}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="skills3"
                placeholder="Skill 3"
                className="w-full border border-black p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                value={formData.skills3}
                onChange={handleChange}
                required
              />
            </div>
          </fieldset>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full md:w-auto"
          >
            Build Resume
          </button>
        </form>
        {resumeData && (
          <div className="resume_wrapper flex flex-wrap bg-gray-100 p-6 rounded-lg shadow-lg border-2 border-black">
            <div className="resume_left w-full lg:w-1/3 p-4 bg-gray-200 rounded-lg shadow-md mb-4 lg:mb-0">
              <div className="resume_bottom">
                <div className="resume_item resume_namerole text-center mb-6">
                  <div className="text-2xl font-bold">{resumeData.name}</div>
                </div>
                <div className="resume_item resume_contact mb-4">
                  <div className="font-semibold text-lg mb-2">Contact</div>
                  <div className="text-gray-700">
                    <p><strong>Phone:</strong> {resumeData.phone}</p>
                    <p><strong>Email:</strong> {resumeData.email}</p>
                    <p><strong>LinkedIn:</strong> {resumeData.linkedin}</p>
                  </div>
                </div>
                <div className="resume_item resume_skills">
                  <div className="font-semibold text-lg mb-2">Skills</div>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>{resumeData.skills1}</li>
                    <li>{resumeData.skills2}</li>
                    <li>{resumeData.skills3}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resume_right w-full lg:w-2/3 p-4 bg-gray-300 rounded-lg shadow-md">
              <div className="resume_item resume_address mb-4">
                <div className="font-semibold text-lg mb-2">Brief Introduction</div>
                <div className="text-gray-700">
                  <p>{resumeData.summery}</p>
                </div>
              </div>
              <div className="resume_item resume_education mb-6">
                <div className="font-semibold text-lg mb-2">Education</div>
                <div className="text-gray-700">
                  <p><strong>Department:</strong> {resumeData.education}</p>
                  <p><strong>Description:</strong> {resumeData.description}</p>
                  <p><strong>Completed:</strong> {resumeData.completed}</p>
                </div>
              </div>
              <div className="resume_item resume_experience mb-6">
                <div className="font-semibold text-lg mb-2">Experience</div>
                <div className="text-gray-700">
                  <p><strong>Company:</strong> {resumeData.experience}</p>
                  <p><strong>Position:</strong> {resumeData.position}</p>
                  <p><strong>Description:</strong> {resumeData.description2}</p>
                </div>
              </div>
              <div className="resume_item resume_interests">
                <div className="font-semibold text-lg mb-2">Interests</div>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Volleyball</li>
                  <li>Reading</li>
                  <li>Movies</li>
                  <li>Riding</li>
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
      <button
    onClick={handleDownload}
    className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md w-full md:w-auto"
>
    Download Resume
</button>
    </div>
  );
};





export default Page;