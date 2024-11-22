import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/data/appointments.json'); // Replace with backend URL
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) return <p>Loading appointments...</p>;
  if (error) return <p>Error loading appointments. Please try again later.</p>;

  return (
    <div className="appointment-list">
      <h1>Doctor's Appointment Dashboard</h1>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id} className="appointment-item">
              <h2>Patient: {appointment.patientName}</h2>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <p><strong>Reason:</strong> {appointment.reason}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments available.</p>
      )}
    </div>
  );
};

export default AppointmentList;
