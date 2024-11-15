import React, { useState } from "react";

export default function AppointmentPanel() {
  // Sample appointment data
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "John Doe",
      age: 30,
      date: "2024-11-12",
      time: "10:00 AM",
      reason: "General Checkup",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      age: 25,
      date: "2024-11-13",
      time: "11:30 AM",
      reason: "Flu Symptoms",
    },
    {
      id: 3,
      patientName: "Robert Brown",
      age: 45,
      date: "2024-11-14",
      time: "2:00 PM",
      reason: "Follow-up Appointment",
    },
  ]);

  const handleAccept = (id) => {
    alert(`Appointment with ID ${id} has been accepted.`);
    setAppointments(appointments.filter((appt) => appt.id !== id));
  };

  const handleReject = (id) => {
    alert(`Appointment with ID ${id} has been rejected.`);
    setAppointments(appointments.filter((appt) => appt.id !== id));
  };

  return (
    <>
    
      <header className="bg-maingreen text-black shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-extrabold">
            <a href="/" className="decoration-white">
              MyLogo
            </a>
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
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-left">Appointments Panel</h1>

        {appointments.length === 0 ? (
          <p className="text-left text-gray-600">No appointments available.</p>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-2 text-left">Name: {appointment.patientName}</h2>
                <p className="text-left"><span className="font-medium">Age:</span> {appointment.age}</p>
                <p className="text-left"><span className="font-medium">Date:</span> {appointment.date}</p>
                <p className="text-left"><span className="font-medium">Time:</span> {appointment.time}</p>
                <p className="mb-4 text-left"><span className="font-medium">Reason:</span> {appointment.reason}</p>

                <div className="flex space-x-4">
                  <button
                    onClick={() => handleAccept(appointment.id)}
                    className="px-4 py-2 bg-maingreen text-black rounded hover:bg-green-600"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(appointment.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
