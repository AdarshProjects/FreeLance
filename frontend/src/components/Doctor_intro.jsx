import React, { useState } from "react";

function Doctor_intro() {
  const [isEditing, setIsEditing] = useState(false);
  const [doctor, setDoctor] = useState({
    name: "Dr. Jane Doe",
    experience: "10 years",
    details: "Specialist in Internal Medicine",
    address: "675 School Lane London EC21 4MB",
    age: "45",
    education: "All India Institute of Medical Sciences Raipur",
    fee: "$200",
    about: "Dr. Jordan Blake is a compassionate and skilled physician with over a decade of experience in family medicine. Known for her patient-centered approach, Dr. Blake combines clinical expertise with a deep commitment to each patient's overall well-being. She graduated with honors from Johns Hopkins University School of Medicine and completed her residency at Massachusetts General Hospital."
  });

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleChange = (field, value) => {
    setDoctor({ ...doctor, [field]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <>
      {/* Header Component at the very top */}
      <div className="bg-maingreen text-black shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-2xl font-extrabold">
            <a href="/" className="decoration-white">
              MyLogo
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="space-x-6 text-lg">
            <a href="/" className="hover:decoration-white">
              Home
            </a>
            <a href="/appointments" className="hover:decoration-white">
              Appointments
            </a>
            <a href="/features" className="hover:decoration-white">
              Features
            </a>
            <a href="/listings" className="hover:decoration-white">
              Listings
            </a>
            <a href="/login" className="hover:decoration-white">
              Login/Signup
            </a>
          </nav>
        </div>
      </div>

      {/* Doctor Dashboard */}
      <div className="max-w-lg mx-auto mt-1 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">Doctor Dashboard</h1>

        {isEditing ? (
          <div>
            <div className="mb-4 ">
              <label className="block font-medium">Name:</label>
              <input
                type="text"
                value={doctor.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium">Experience:</label>
              <input
                type="text"
                value={doctor.experience}
                onChange={(e) => handleChange("experience", e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium">Details:</label>
              <textarea
                value={doctor.details}
                onChange={(e) => handleChange("details", e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Address:</label>
              <textarea
                value={doctor.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Age:</label>
              <input
                type="text"
                value={doctor.age}
                onChange={(e) => handleChange("age", e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>

            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        ) : (
          <div>
            <p className="mb-2 grid justify-items-start "><span className="font-medium">Name:</span> {doctor.name}</p>
            <p className="mb-2 grid justify-items-start "><span className="font-medium">Appointment Fee:</span> {doctor.fee}</p>
            <p className="mb-2 grid justify-items-start"><span className="font-medium">Experience:</span> {doctor.experience}</p>
            <p className="mb-4 grid justify-items-start"><span className="font-medium">Details:</span> {doctor.details}</p>
            <p className="mb-4 grid justify-items-start"><span className="font-medium">Address:</span> {doctor.address}</p>
            <p className="mb-4 grid justify-items-start"><span className="font-medium">Age:</span> {doctor.age}</p>
            <p className="mb-4 grid justify-items-start"><span className="font-medium">Education:</span> {doctor.education}</p>
            <p className="mb-4 grid justify-items-start"><span className="font-medium">About:</span> {doctor.about}</p>
            <button
              onClick={toggleEdit}
              className="px-4 py-2 bg-maingreen text-black rounded hover:bg-blue-300 hover:text-white"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Doctor_intro;
