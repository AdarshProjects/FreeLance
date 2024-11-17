import { useState } from "react";
import { Statecontext } from "./StateContext";

export default function StateProvider({children}){
    const [state, setState] = useState("");
    const [district, setDistrict] = useState(""); 
    const [specialist, setSpecialist] = useState("");
    const [token ,settoken] = useState("");

    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [speciality, setspeciality] = useState("");
    const [age, setage] = useState("");
    const [fee, setfee] = useState("");
    const [about, setabout] = useState("");

    return (
        <>
             <Statecontext.Provider value = {{state, setState, district, setDistrict, specialist, setSpecialist, token, settoken, name, setname,
                speciality, setspeciality, age, setage, fee, setfee, about, setabout, address, setaddress
             }}>
                {children}
             </Statecontext.Provider>
        </>
    )
}