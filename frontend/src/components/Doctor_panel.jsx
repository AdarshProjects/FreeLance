
export default function Doctor_panel () {
    return (
        <div>
                                <header className="bg-maingreen text-black shadow-md p-4">
                         <div className="container mx-auto flex justify-between items-center">
                    
                    {/* Logo Section */}
                    <div className="text-2xl font-extrabold">
                    <a href="/" className="decoration-white">MyLogo</a>
                    </div>
                    
                    {/* Navigation Links */}
                    <nav className="space-x-6 text-lg">
                    <a href="/" className="hover:decoration-white">Home</a>
                    <a href="/appointments" className="hover:decoration-white">Appointments</a>
                    <a href="/features" className="hover:decoration-white">Features</a>
                    <a href="/listings" className="hover:decoration-white">Listings</a>
                    <a href="/login" className="hover:decoration-white">Login/Signup</a>
                    </nav>
                </div>
                </header>




                <div>
                       <div className="max-w-1xl w-full mx-auto
                        bg-white rounded-lg shadow-lg overflow-hidden 
                        flex h-64">
                        
                        {/*Doctor's Picture */}
                        <div className="w-1/5">
                            <img
                            src="https://via.placeholder.com/300" // Placeholder image, replace with actual URL
                            alt="Doctor"
                            className="w-full h-full object-cover"
                            />
                        </div>


                        {/* Doctor Details */}
                        <div className="w-2/3 p-6 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-800">Dr. John Doe</h2>
                            <p className="mt-4 text-gray-600 text-justify">
Dr. Jordan Blake is a compassionate and skilled physician with over a decade of experience in family medicine. Known for her patient-centered approach, Dr. Blake combines clinical expertise with a deep commitment to each patient's overall well-being. She graduated with honors from Johns Hopkins University School of Medicine and completed her residency at Massachusetts General Hospital.                            </p>
                        </div>
                        <div className="mt-4">
                            <span className="font-semibold text-gray-700">Appointment Fee:</span>
                            <span className="ml-2 text-green-600">$50</span>
                        </div>
                    </div>








                        </div>

                </div>

                        
        </div>

    )
}