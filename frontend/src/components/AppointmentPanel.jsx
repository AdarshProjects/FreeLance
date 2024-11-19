import React from 'react'

export default function AppointmentPanel() {
  return (
    <>
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

    <div className=' mt-7 mb-7 shadow-cyan-100  flex justify-between p-4 shadow-3xl p-4'>
        <div className='text-left ml-12'>
            <h1 className='font-semibold text-2xl'>Dr. Richard</h1>
            <p><span className='font-semibold text-xl'>Specialist:</span><span className='text-lg'>General Physician</span></p>
            <p className='w-48'><span className='font-semibold text-xl'>Address: </span><span>Oxford street 404 floor no. 4 India distt. Solaan</span> </p>
            <p><span className='font-semibold text-xl'>Date and Time: </span><span>25 Nov. || 3:00pm</span></p>
        </div>
        <div className='mr-12'>
            <button className='bg-cyan-100  p-1 text-lg rounded mt-9 text-red-600'>Pending....</button>
        </div>

    </div>
    <div className=' mt-7 mb-7 shadow-cyan-100  flex justify-between p-4 shadow-3xl p-4'>
        <div className='text-left ml-12'>
            <h1 className='font-semibold text-2xl'>Dr. Richard</h1>
            <p><span className='font-semibold text-xl'>Specialist:</span><span className='text-lg'>General Physician</span></p>
            <p className='w-48'><span className='font-semibold text-xl'>Address: </span><span>Oxford street 404 floor no. 4 India distt. Solaan</span> </p>
            <p><span className='font-semibold text-xl'>Date and Time: </span><span>25 Nov. || 3:00pm</span></p>
        </div>
        <div className='mr-12'>
            <button className='bg-cyan-100  p-1 text-lg rounded mt-9 '>Accepted</button>
        </div>

    </div>
    <div className=' mt-7 mb-7 shadow-cyan-100  flex justify-between p-4 shadow-3xl p-4'>
        <div className='text-left ml-12'>
            <h1 className='font-semibold text-2xl'>Dr. Richard</h1>
            <p><span className='font-semibold text-xl'>Specialist:</span><span className='text-lg'>General Physician</span></p>
            <p className='w-48'><span className='font-semibold text-xl'>Address: </span><span>Oxford street 404 floor no. 4 India distt. Solaan</span> </p>
            <p><span className='font-semibold text-xl'>Date and Time: </span><span>25 Nov. || 3:00pm</span></p>
        </div>
        <div className='mr-12'>
            <button className='bg-cyan-100  p-1 text-lg rounded mt-9 text-red-600'>Pending....</button>
        </div>

    </div>


    </>
  )
}
