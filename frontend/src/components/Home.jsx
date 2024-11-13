import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Statecontext } from './StateContext';

export default function Home(){
    const Navigate = useNavigate();
    const { state, setState, district, setDistrict, specialist, setSpecialist } = useContext(Statecontext);
    return (
        <>
            <div className="flex justify-between p-4">
                <div className="min-w-32 h-10 bg-slate-300 grid place-items-center rounded">
                    <p className="item-center ">LOGO</p>
                </div>
                <div className="flex w-1/2 justify-evenly mt-2 font-semibold cursor-pointer">                                   
                    <div className="text-center">
                        Home
                    </div>
                    <div className="text-center">
                        Appointment
                    </div>
                    <div className="text-c
                    enter">
                        Features
                    </div>
                    <div className="text-center">
                        Listings
                    </div>
                    <div className="text-center">
                        Login/Signup
                    </div>
                </div>
            </div>
            <div className="bg-[#C3EAEA] p-4">
                <div className="bg-[#C3EAEA] p-4 flex">
                    <img src='/Doctorpage.PNG' className="h-1/5 w-2/5 ml-24"/>
                    <div className="text-left ml-16">
                        <div className="font-bold text-4xl mt-24">BOOK YOUR DOCTOR!</div>
                        <div className="text-lg">India’s best online appointment scheduling platform</div>
                    </div>
                </div>
                <div className="flex justify-around">
                    <select className="border w-80 h-12 rounded-md text-slate-600 text-lg" onChange={(e)=>{
                        setState(e.target.value);
                    }}>
                        <option>State</option>
                        <option>Delhi</option>
                        <option>Haryana</option>
                        <option>Uttar Pradesh</option>
                        <option>Chattishgarh</option>
                        <option>Madhya Pradesh</option>
                    </select>
                    <select className="border w-80 h-12 rounded-md text-slate-600 text-lg" onChange={(e)=>{
                        setDistrict(e.target.value);
                    }}>
                        {state == "Uttar Pradesh" ?
                        <>
                            <option>Agra</option>
                            <option>Lucknow</option>
                            <option>Meerut</option>
                            <option>Varanasi</option>
                            <option>Lucknow</option>
                        </>
                    : state == "Haryana" ? 
                        <>
                            <option value="gurugram">Gurugram</option>
                            <option value="faridabad">Faridabad</option>
                            <option value="panipat">Panipat</option>
                            <option value="ambala">Ambala</option>
                            <option value="hisar">Hisar</option>
                        </>
                    : state == "Delhi" ? 
                        <>
                            <option value="new-delhi">New Delhi</option>
                            <option value="central-delhi">Central Delhi</option>
                            <option value="south-delhi">South Delhi</option>
                            <option value="west-delhi">West Delhi</option>
                            <option value="north-delhi">North Delhi</option>
                        </>
                    : state == "Chattishgarh" ? 
                        <>
                            <option value="raipur">Raipur</option>
                            <option value="bilaspur">Bilaspur</option>
                            <option value="durg">Durg</option>
                            <option value="korba">Korba</option>
                            <option value="bastar">Bastar</option>\
                        </>
                    : state == "Madhya Pradesh" ? 
                        <>
                            <option value="indore">Indore</option>
                            <option value="bhopal">Bhopal</option>
                            <option value="gwalior">Gwalior</option>
                            <option value="jabalpur">Jabalpur</option>
                            <option value="uj   jain">Ujjain</option>
                        </>
                    :<option>District</option>}
                    </select>
                    <select className="border w-80 h-12 rounded-md text-slate-600 text-lg" onChange={(e)=>{
                        setSpecialist(e.target.value); 
                    }}>
                        <option>Doctor/Speciality</option>
                        <option>ENT</option>
                        <option>CARDIOLOGY</option>
                        <option>GYNOLOGY</option>
                        <option>AYURVEDIC</option>
                    </select>
                    <button className="p-3 w-24 bg-[#6888E7] rounded-full" onClick={()=> Navigate("/Doctorinfo")}>Search</button>
                </div>
            </div>
            <div className="flex justify-around  mt-12 md-12">
                <div className="h-80 w-3/12 border-black rounded-2xl shadow-[#C3EAEA] shadow-3xl">
                    <img src="/easy.PNG" className="h-2/5 w-3/6 ml-16"></img>
                    <div className="text-green-500 text-xl">Easy Appointments, Expert Care</div>
                    <div className="text-slate-500 text-lg">Simplify your healthcare journey. Book appointments  with  top   doctors effortlessly, from the comfort of your home. Access quality medical advice and services at your fingertips.</div>
                </div>
                <div className="h-80 w-3/12 border-black rounded-2xl shadow-[#C3EAEA] shadow-3xl">
                    <img src="/know.PNG" className="h-2/5 w-3/6 ml-16"></img>
                    <div className="text-green-500 text-xl">know your Doctor</div>
                    <div className="text-slate-500 text-lg">Empower yourself with knowledge. Learn about your doctor's qualifications, experience, and approach to care. Make informed decisions about your health with confidence.</div>
                </div>
                <div className="h-80 w-3/12 border-black rounded-2xl shadow-[#C3EAEA] shadow-3xl">
                    <img src="/book consult.PNG" className="h-2/5 w-3/6 ml-16"></img>
                    <div className="text-green-500 text-xl">Book, Consult, Recover.</div>
                    <div className="text-slate-500 text-lg ">Simplify your healthcare journey. Book appointments, consult with experts, and recover faster.</div>
                </div>
            </div>
            <div className="mt-12 flex justify-around">
                <div>
                    <div className="text-3xl text-cyan-500 font-semibold text-left">DOCBRIDGE</div>
                    <div className="w-72 text-lg text-slate-500 text-left mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                </div>
                <div>
                    <div className="text-xl font-semibold">COMPANY</div>
                    <div className="text-lg text-slate-500 text-left mt-4">Home</div>
                    <div className="text-lg text-slate-500 text-left">About</div>
                    <div className="text-lg text-slate-500 text-left">Contact</div>
                    <div className="text-lg text-slate-500 text-left">Help</div>
                </div>
                <div>
                    <div className="text-xl font-semibold">GET IN TOUCH</div>
                    <div className="text-lg text-slate-500 text-left mt-4">+0-000-000-000</div>
                    <div className="text-lg text-slate-500 text-left">abvcdcsd@gmail.com</div>
                </div>
            </div>
        </>
    )
}