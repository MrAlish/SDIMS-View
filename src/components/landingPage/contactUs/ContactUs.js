import React from 'react'
import { FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
const ContactUs = () => {
  return (
        <div className=" py-10 bg-slate-300 flex justify-center items-center ">
  <div className="container p-12 bg-gray-100 rounded-xl">
    <h1 className="text-4xl uppercase font-bold from-current mb-8 text-center italic ">Contact Us</h1>
  
    {/* <!-- Box-1 --> */}
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
      <div className="bg-white">
        <div>
          <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">

            <div className='text-center flex justify-center py-5 text-blue-100 '  >
                <FaMapMarkerAlt size={40} />
            </div>
            <div className='text-2xl text-center pb-10 font-bold text-blue-100' >
             Kathnmandu Nepal 
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Box-2 --> */}
      <div className="bg-white">
        <div>
          <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <div className='text-center flex justify-center py-5 text-blue-100 '  >
             <FaMailBulk size={40} />
            </div>
            <div className='text-2xl text-center pb-10 font-bold text-blue-100' >
             info@nepal.gov.np
            </div>
           
          </div>
        </div>
      </div>
      {/* <!-- Box-3 --> */}
      <div className="bg-white">
        <div>
          <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <div className='text-center flex justify-center py-5 text-blue-100 '  >
             <FaPhoneAlt size={40} />
            </div>
            <div className='text-2xl text-center pb-10 font-bold text-blue-100' >
             01-4662100,980000000
            </div>
          </div>
        </div>
      </div>
    </div>
   

  </div>
</div>
  )
}

export default ContactUs