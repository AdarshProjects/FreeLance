import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Statecontext } from "./StateContext";

export default function Dcotor_info() {
    const navigate = useNavigate();
    const {state, district, specialist} = useContext(Statecontext);
    return (
        <>
            <div>
            <h1>Another Page</h1>
            <p>State: {state}</p>
            <p>District: {district}</p>
            <p>Specialist: {specialist}</p>
        </div>        
            <div className="flex justify-between p-2 bg-maingreen">
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


            <div className="p-3 grid grid-cols-2 gap-3">
            <div className="w-auto p-6 rounded-lg flex shadow-3xl shadow-cyan-100 mt-9">
                    <div className="w-40 h-40 bg-slate-300 rounded-full mt-6">
                        <p className="text-7xl flex items-center justify-center translate-y-10">R</p>
                    </div>
                    <div className="ml-14 w-72 text-left">
                        <p className="text-4xl font-semibold ">Dr. Raghu Datta</p>
                        <div><span className="font-semibold text-xl">Address-</span>HOUSE NO. 1111 VPOJSKNSK DISTT.  GFDGERE G.R  PIN CODE- 129493 INDIA  NEW DELHI</div>
                        <div><span className="font-semibold text-xl">Reviews -</span>VERY GOOD APP</div>
                        <div><span className="font-semibold text-xl">Years of Experience -</span> 5 YEARS</div>
                        <div><span className="font-semibold text-xl">Speciality -</span> ENT , CARDIOLOGY</div>
                        <div className="flex">
                            <button className="p-1 border-2 bg-white w-36 rounded-md ml-6 font-medium" onClick={() => navigate("/doctorpanel")}>Appointment</button>
                            <div className="ml-14 w-10"> <span className="font-semibold text-lg">Consultation Fee-</span>$299</div>
                        </div>
                    </div>
                </div>
                <div className="w-auto p-6 rounded-lg flex shadow-3xl shadow-cyan-100 mt-9">
                    <div className="w-40 h-40 bg-slate-300 rounded-full mt-6">
                        <p className="text-7xl flex items-center justify-center translate-y-10">R</p>
                    </div>
                    <div className="ml-14 w-72 text-left">
                        <p className="text-4xl font-semibold">Dr. Raghu Datta</p>
                        <div><span className="font-semibold text-xl">Address-</span>HOUSE NO. 1111 VPOJSKNSK DISTT.  GFDGERE G.R  PIN CODE- 129493 INDIA  NEW DELHI</div>
                        <div><span className="font-semibold text-xl">Reviews -</span>VERY GOOD APP</div>
                        <div><span className="font-semibold text-xl">Years of Experience -</span> 5 YEARS</div>
                        <div><span className="font-semibold text-xl">Speciality -</span> ENT , CARDIOLOGY</div>
                        <div className="flex">
                            <button className="p-1 border-2 bg-white w-36 rounded-md ml-6 font-medium" onClick={() => navigate("/doctorpanel")}>Appointment</button>
                            <div className="ml-14 w-10"> <span className="font-semibold text-lg">Consultation Fee-</span>$299</div>
                        </div>
                    </div>
                </div>
                <div className="w-auto p-6 rounded-lg flex shadow-3xl shadow-cyan-100 mt-9">
                    <div className="w-40 h-40 bg-slate-300 rounded-full mt-6">
                        <p className="text-7xl flex items-center justify-center translate-y-10">R</p>
                    </div>
                    <div className="ml-14 w-72 text-left">
                        <p className="text-4xl font-semibold">Dr. Raghu Datta</p>
                        <div><span className="font-semibold text-xl">Address-</span>HOUSE NO. 1111 VPOJSKNSK DISTT.  GFDGERE G.R  PIN CODE- 129493 INDIA  NEW DELHI</div>
                        <div><span className="font-semibold text-xl">Reviews -</span>VERY GOOD APP</div>
                        <div><span className="font-semibold text-xl">Years of Experience -</span> 5 YEARS</div>
                        <div><span className="font-semibold text-xl">Speciality -</span> ENT , CARDIOLOGY</div>
                        <div className="flex">
                            <button className="p-1 border-2 bg-white w-36 rounded-md ml-6 font-medium" onClick={() => navigate("/doctorpanel")}>Appointment</button>
                            <div className="ml-14 w-10"> <span className="font-semibold text-lg">Consultation Fee-</span>$299</div>
                        </div>
                    </div>
                </div>
                <div className="w-auto p-6 rounded-lg flex shadow-3xl shadow-cyan-100 mt-9">
                    <div className="w-40 h-40 bg-slate-300 rounded-full mt-6">
                        <p className="text-7xl flex items-center justify-center translate-y-10">R</p>
                    </div>
                    <div className="ml-14 w-72 text-left">
                        <p className="text-4xl font-semibold">Dr. Raghu Datta</p>
                        <div><span className="font-semibold text-xl">Address-</span>HOUSE NO. 1111 VPOJSKNSK DISTT.  GFDGERE G.R  PIN CODE- 129493 INDIA  NEW DELHI</div>
                        <div><span className="font-semibold text-xl">Reviews -</span>VERY GOOD APP</div>
                        <div><span className="font-semibold text-xl">Years of Experience -</span> 5 YEARS</div>
                        <div><span className="font-semibold text-xl">Speciality -</span> ENT , CARDIOLOGY</div>
                        <div className="flex">
                            <button className="p-1 border-2 bg-white w-36 rounded-md ml-6 font-medium" onClick={() => navigate("/doctorpanel")}>Appointment</button>
                            <div className="ml-14 w-10"> <span className="font-semibold text-lg">Consultation Fee-</span>$299</div>
                        </div>
                    </div>
                </div>
            </div>
        </> 
  );
}
