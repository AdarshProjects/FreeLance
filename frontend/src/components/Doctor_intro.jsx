import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Statecontext } from "./StateContext";

export default function Doctor_intro() {
  const [isEditing, setIsEditing] = useState(false);
  const [experience, setexpreience] = useState("");
  const [State, setState] = useState("");
  const [district, setdistrict] = useState("");
  const [education, seteducation] = useState("");

  const {name, setname, address, setaddress, speciality, setspeciality, age, setage, fee, setfee, about, setabout} = useContext(Statecontext);

  const toggleEdit = () => setIsEditing(!isEditing);

  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/doctorpanel/description")
      .then(response => {
        console.log(response.data.doctor)
      })
  },[])

  const handleSave = () => {
    setIsEditing(false)
  }
  return (
    
    <>

      <div className="bg-maingreen text-black shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-extrabold">
            <a href="/" className="decoration-white">
              MyLogo
            </a>
          </div>

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
          <div className="text-left">
            <div className="mb-4 ">
              <label className="block font-medium">Name:</label>
              <input type="text" value={name} className="w-full border rounded px-3 py-2 mt-1" onChange={(e) => setname(e.target.value)}/>
            </div>

            <div className="mb-4">
                <label className="block font-medium">Experience:</label>
                <input type="text" value={experience} onChange={(e) => setexpreience(e.target.value)} className="w-full border rounded px-3 py-2 mt-1" />
            </div>
                    
            <div className="mb-4">                 
                <label className="block font-medium">Speciality:</label>
                <textarea value={speciality} onChange={(e) => setspeciality(e.target.value)} className="w-full border rounded px-3 py-2 mt-1" />
            </div>
                    
            <div className="mb-4">
              <label className="block font-medium">Address:</label>
              <textarea value={address} onChange={(e) => setaddress(e.target.value)} className="w-full border rounded px-3 py-2 mt-1" rows="3" />
            </div>

            <div className="mb-4">
              <label className="block font-medium">State:</label>
              <input value={State} onChange={(e) => setState(e.target.value)} className="w-full border rounded px-3 py-2 mt-1" />
            </div>

            <div className="mb-4">
              <label className="block font-medium">District:</label>
              <input value={district} onChange={(e) => setdistrict(e.target.value)} className="w-full border rounded px-3 py-2 mt-1"  />
            </div>
                    
            <div className="mb-4">
              <label className="block font-medium">Age:</label>
             <input type="text" value={age} onChange={(e) => setage(e.target.value)} className="w-full border rounded px-3 py-2 mt-1" />
            </div>

            <div className="mb-4">
              <label className="block font-medium">Appointment Fee:</label>
              <input type="text" value={fee} onChange={(e) => setfee(e.target.value)} className="w-full border rounded px-3 py-2 mt-1" />
            </div>

            <div className="mb-4">
              <label className="block font-medium">Education:</label>
              <input type="text" value={education} onChange={(e) => seteducation(e.target.value)} className="w-full border rounded px-3 py-2 mt-1" />
            </div>

            <div className="mb-4">
              <label className="block font-medium">About:</label>
              <textarea type="text" value={about} onChange={(e) => setabout(e.target.value)} className="w-full border rounded px-3 py-2 mt-1" />
            </div>


            <button
              onClick={async()=>{
                handleSave(); 
                const response = await axios.post("http://localhost:3000/api/v1/doctorpanel/description",{
                  name,
                  experience,
                  fee,
                  speciality,
                  address,
                  State,
                  district,
                  age,
                  education,
                  about
                })
                }
              }
              
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 items-center"
            >
              Save
            </button>
          </div>
        ) : (
          <div>
            <p className="mt-4 mb-4 grid justify-items-start"><span className="font-medium">Name:</span> {name}</p>
            <p className="mt-4 mb-4 grid justify-items-start"><span className="font-medium">Appointment Fee:</span> {fee}</p>
            <p className="mt-4 mb-4 grid justify-items-start"><span className="font-medium">Experience:</span> {experience}</p>
            <p className="mt-4 mb-4 grid justify-items-start"><span className="font-medium">Speciality:</span> {speciality}</p>
            <p className="mt-4 mb-4 grid justify-items-start"><span className="font-medium">Address:</span> {address}</p>
            <p className="mt-4 mb-4 grid justify-items-start"><span className="font-medium">State:</span> {State}</p>
            <p className="mt-4 mb-4 grid justify-items-start"><span className="font-medium">District:</span> {district}</p>
            <p className="mt-4 mb-4 grid justify-items-start"><span className="font-medium">Age:</span> {age}</p>
            <p className="mt-4 mb-4 grid justify-items-start"><span className="font-medium">Education:</span> {education}</p>
            <p className="mt-4 mb-4 grid justify-items-start"><span className="font-medium">About:</span> {about}</p>
            <button
              onClick={toggleEdit}
              className="px-4 py-2 bg-maingreen text-black rounded hover:bg-blue-300 hover:text-white">
              Edit
            </button>
          </div>
        )}
      </div>
    </>
  );
}
