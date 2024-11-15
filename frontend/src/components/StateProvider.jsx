import { useState } from "react";
import { Statecontext } from "./StateContext";

export default function StateProvider({children}){
    const [state, setState] = useState("");
    const [district, setDistrict] = useState(""); 
    const [specialist, setSpecialist] = useState("");
    const [token ,settoken] = useState("");
    return (
        <>
             <Statecontext.Provider value = {{state, setState, district, setDistrict, specialist, setSpecialist, token, settoken}}>
                {children}
             </Statecontext.Provider>
        </>
    )
}