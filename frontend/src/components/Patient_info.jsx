import React, { useState } from 'react';

function Patient_info() {
  
  const [isEditing, setIsEditing] = useState(false); 
  const [patient, setPatient] = useState({
    name: "Joh Doe",
    id: "123456789",
    height: "6 ft",
    weight: "75 kg",
    age: "34 years",
    bloodType: "O+",
    medicalHistory: ["Diabetes Type II", "Allergy to penicillin", "High blood pressure"],
    upcomingAppointments: [
      { title: "Check-up with Dr. Smith", date: "Nov 14, 2024" },
      { title: "Blood Test", date: "Dec 01, 2024" }
    ],
    prescriptions: [
      "Metformin - 500mg twice a day",
      "Lisinopril - 10mg once a day"
    ]
  });


  const toggleEdit = () => setIsEditing(!isEditing);

 
  const handleChange = (field, value) => {
    setPatient({ ...patient, 
      [field]: value });
  };

  return ( 
        


    <div className="min-h-screen bg-gray-100 p-6">
           <header className="bg-maingreen text-black shadow-md p-4">
                     <div className="container mx-auto flex justify-between items-center">
                    
                    
                    <div className="text-2xl font-extrabold">
                    <a href="/" className="decoration-white">MyLogo</a>
                    </div>
                    
                   
                    <nav className="space-x-6 text-lg">
                    <a href="/" className="hover:decoration-white">Home</a>
                    <a href="/appointments" className="hover:decoration-white">Appointments</a>
                    <a href="/features" className="hover:decoration-white">Features</a>
                    <a href="/listings" className="hover:decoration-white">Listings</a>
                    <a href="/login" className="hover:decoration-white">Login/Signup</a>
                    </nav>
                </div>
                </header>


      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      
        <div className="border-b border-gray-300 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Patient Information</h2>
          <p className="text-gray-500">Patient ID: {patient.id}</p>
          <div className="flex items-center justify-between">
            {isEditing ? (
              <input
                type="text"
                value={patient.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 outline-none"
              />
            ) : (
              <h2 className="text-2xl font-semibold text-gray-800">{patient.name}</h2>
            )}
            <button
              onClick={toggleEdit}
              className="px-4 py-2 bg-maingreen text-black font-semibold rounded-lg 
              hover:bg-maingreen-600 focus:outline-none focus:ring focus:ring-blue-300 
              focus:outline-none"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {["height", "weight", "age", "bloodType"].map((field) => (
            <div key={field} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-700 capitalize">{field}</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={patient[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  className="w-full text-2xl font-bold text-gray-900 border-b-2 border-gray-300 outline-none"
                />
              ) : (
                <p className="text-2xl font-bold text-gray-900">{patient[field]}</p>
              )}
            </div>
          ))}
        </div>

        
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Medical History</h3>
          {isEditing ? (
            <textarea
              value={patient.medicalHistory.join("\n")}
              onChange={(e) =>
                handleChange("medicalHistory", e.target.value.split("\n"))
              }
              className="w-full p-2 border border-gray-300 rounded-md outline-none text-gray-700"
            />
          ) : (
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {patient.medicalHistory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Appointments</h3>
            <ul className="space-y-3">
              {patient.upcomingAppointments.map((appointment, index) => (
                <li key={index} className="flex justify-between text-gray-700">
                  <span>{appointment.title}</span>
                  <span>{appointment.date}</span>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Prescriptions</h3>
            <ul className="space-y-3">
              {patient.prescriptions.map((prescription, index) => (
                <li key={index} className="text-gray-700">
                  {prescription}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patient_info;