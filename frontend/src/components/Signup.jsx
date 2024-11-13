import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigation = useNavigate();
    return (
      <div className="flex justify-center ">
        <div className="w-6/12 rounded-md bg-slate-100 text-center flex font-Poppins">
            <div className="">
                <img className=" rounded-md w-74" src="/projectLogin.PNG" />
            </div>
            <div className="m-5 ml-12 text-left">
                <p className="font-Poppins text-slate-500">Welcome Back👋</p>
                <h2 className="text-xl font-semibold font-Poppins mb-3">Sign up to your Account</h2>
                <label className="block text-slate-600">Firstname
                    <input type="text" placeholder="Jane" className="border w-full h-8 rounded pl-3 mb-3 "></input>
                </label>
                <label className="block text-slate-600">Lastname
                    <input type="text" placeholder="Smith" className="border w-full h-8 rounded pl-3 mb-3 "></input>
                </label>
                <label className="block text-slate-600">Email
                    <input type="text" placeholder="abcd@gmail.com" className="border w-full h-8 rounded pl-3 mb-3"></input>
                </label>
                <label className="block text-slate-600">Password
                    <input type="password" placeholder=". . . . . . . . ." className="border w-full h-8 rounded pl-3 mb-3 text-left"></input>
                </label>
                <button className="w-full rounded-md border p-1 bg-[#91CDCB]">
                    <p className="text-white">Sign up</p>
                </button>
                <div className="flex  justify-center font-sans text-base font-normal text-slate-500 pt-4 -mt-3">
                    <div>
                        Already have an account? 
                    </div> 
                    <div className="underline decoration-solid pl-3 cursor-pointer" onClick={()=>{navigation("/signin")}}>
                        Signin
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }