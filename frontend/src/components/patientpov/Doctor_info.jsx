import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Statecontext } from "./StateContext";
import axios from "axios";

export default function Doctor_info() {
    const [doctorname, setdoctorname] = useState([]);
    const [filtering, setfiltering] = useState([]);
    const navigate = useNavigate();
    const {state, district, specialist } = useContext(Statecontext);
    const { token, settoken } = useContext(Statecontext);


    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/doctorpanel/doctorsdetail");
                setdoctorname(response.data.doctors);
                console.log(response.data.doctors);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once.

    useEffect(()=>{
    
    },[doctorname])

    useEffect(() => {
        const filteredDoctors = doctorname.filter(
          (doctor) =>
            state.toLowerCase() === doctor.State?.toLowerCase() &&
            specialist.toLowerCase() === doctor.speciality?.toLowerCase() 
        );
        setfiltering(filteredDoctors);
        console.log(filteredDoctors);
      }, [doctorname, state, specialist]); // Add dependencies to ensure this runs when inputs change
    return (
        <>
            <div>
        </div>        
        <div className="flex justify-between p-2 bg-maingreen">
                <div className="min-w-32 h-10 bg-maingreen grid place-items-center rounded  ">
                    <p className="item-center font-bold text-black-400 hover:text-sky-400 cursor-pointer ">DOCBRIDGE</p>
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
                    {token == "" ?<a href="/Signup" className="hover:decoration-white">Login/Signup</a>: <img src='/user.png' className='w-6 h-6' onClick={()=>{
                        if(patientnumber){
                            Navigate("/patientinfo2")
                        }else{
                            toast.warning("Please fill your details first (name and other details)")
                        }
                    }}/>}
                    </div>
                </div>
            </div> 
            <div className="grid grid-cols-2 gap-3 p-4">

  {filtering.map((doctors) => {
    return (
      <div className="w-full p-6 rounded-lg flex shadow-3xl shadow-cyan-200 mt-9">
        <div className="w-40 h-40 bg-slate-300 rounded-full mt-6">
          <p className="text-7xl flex items-center justify-center translate-y-10">{doctors.name[0]}</p>
        </div>
        <div className="ml-14 w-72 text-left">
          <p className="text-4xl font-semibold">{doctors.name}</p>
          <div><span className="font-semibold text-xl">Address-</span>{doctors.address}</div>
          <div><span className="font-semibold text-xl">Age -</span>{doctors.age}</div>
          <div><span className="font-semibold text-xl">State -</span>{doctors.State}</div>
          <div><span className="font-semibold text-xl">Years of Experience -</span>{doctors.experience}</div>
          <div><span className="font-semibold text-xl">Speciality -</span>{doctors.speciality}</div>
          <div className="flex">
            <button className="border-2 bg-white w-36 rounded-md ml-6 font-medium" onClick={() =>
                navigate('/doctorpanel?id='+doctors._id)
                }>Appointment</button>
            <div className="ml-14 w-10"> <span className="font-semibold text-lg">Consultation Fee-</span>${doctors.fee}</div>
          </div>
        </div>
      </div>
    );
  })}
</div>

            {/** 
            <div className="p-3 grid grid-cols-2 gap-3">
                <div className="w-auto p-6 rounded-lg flex shadow-3xl shadow-cyan-100 mt-9">
                    <div className="w-40 h-40 bg-slate-300 rounded-full mt-6">
                        <p className="text-7xl flex items-center justify-center translate-y-10">R</p>
                    </div>
                    <div className="ml-14 w-72 text-left">
                        <p className="text-4xl font-semibold ">{name}</p>
                        <div><span className="font-semibold text-xl">Address-</span>{address}</div>
                        <div><span className="font-semibold text-xl">Age -</span>{age}</div>
                        <div><span className="font-semibold text-xl">Years of Experience -</span>{experience}</div>
                        <div><span className="font-semibold text-xl">Speciality -</span>{specialist}</div>
                        <div className="flex">
                            <button className="p-1 border-2 bg-white w-36 rounded-md ml-6 font-medium" onClick={() => navigate("/doctorpanel")}>Appointment</button>
                            <div className="ml-14 w-10"> <span className="font-semibold text-lg">Consultation Fee-</span>${fee}</div>
                        </div>
                    </div>
                </div>
            </div>*/}
            {/**<div>
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
            </div>*/}
        </> 
  );
}
