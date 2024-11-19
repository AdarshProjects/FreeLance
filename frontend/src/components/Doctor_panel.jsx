import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Doctor_panel() {
  const [doctordetails, setdoctordetails] = useState([]);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patientdetail, setpatientdetail] = useState("");
  const [params] = useSearchParams();
  const id = params.get('id');
  const patientid = localStorage.getItem("PatientId");
  const Navigate = useNavigate();


  //fetching the patient details to show in the appointment panel 
  useEffect(()=>{

    const fetchpatientdetail = async()=>{
      const response = await axios.get(`http://localhost:3000/api/v1/patientpanel/particularpatient?patientid=${patientid}`)
      console.log(response.data);
      setpatientdetail(response.data);
    } 
    fetchpatientdetail();
  },[patientid])

  useEffect(()=>{

  },[patientdetail]);
  
  useEffect(()=>{

    const fetchdoctordetails = async()=>{
      const response = await axios.get(`http://localhost:3000/api/v1/doctorpanel/particulardetail?id=${id}`)
      setdoctordetails(response.data.doctors);
    }
    fetchdoctordetails();
  },[id])

  useEffect(()=>{

  }),[doctordetails]

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const timeSlots = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];

  const handleBooking = () => {
    if (selectedDay && selectedTime) {
      alert(`Appointment booked on ${selectedDay} at ${selectedTime}`);
      Navigate('/appointmentpanel')
    } else {
      alert("Please select a day and time slot");
    }
  };

  const sendinglist = ()=>{
    useEffect(()=>{
      async()=>{
        const response = await axios.post("http://localhost:3000/api/v1/appointmentpanel/appointmentlist",{
          patientname: patientdetail.patient.name,
          doctorname: doctordetails.name,
          speciality: doctordetails.speciality,
          date: selectedDay,
          time: selectedTime
        })
      }
    },[patientid])
  }

  return (
    <div>
      <div>{patientid}</div>
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

        
          <div className="mt-8">
        <div className="max-w-3xl w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col space-y-4">
          {/* Doctor's Information */}
          <div className="flex flex-col md:flex-row h-full">
            <div className="w-full md:w-1/3">
              <img
                src="https://via.placeholder.com/300"
                alt="Doctor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800">{doctordetails.name}</h2>
                <p className="mt-4 text-gray-600 text-justify">
                  {doctordetails.about}
                </p>
              </div>
              <div className="mt-4">
                <span className="font-semibold text-gray-700">Appointment Fee:</span>
                <span className="ml-2 text-green-600">{doctordetails.fee}</span>
              </div>
            </div>
          </div>

          {/* Booking Slot Selection */}
          <div className="p-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Select a Booking Slot</h3>

            {/* Day Selection */}
            <div className="flex flex-wrap gap-2 mb-4">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-3 py-1 rounded ${
                    selectedDay === day ? "bg-maingreen text-black" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Time Slot Selection */}
            <div className="flex flex-wrap gap-2 mb-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-3 py-1 rounded ${
                    selectedTime === time ? "bg-maingreen text-black" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>

            {/* Book Appointment Button */}
            <button
              onClick={()=>{
                handleBooking();
                sendinglist()
              }}
              className="px-6 py-2 bg-maingreen text-black rounded hover:bg-white hover:border-dotted border-2 border-sky-500"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
