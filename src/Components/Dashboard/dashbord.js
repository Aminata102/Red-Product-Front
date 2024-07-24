import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import Sidebar from '../../sidebar/Sidebar';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faP } from '@fortawesome/free-solid-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'


import { FaSearch } from 'react-icons/fa';
import { FiLogOut } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

function Dashboard() {
  return (
    <body className=''>
      <Sidebar />
      <Navbar />
      <div className="dashboard flex">
       
        

        <main className="flex flex-col gap-12 ml-64 w-full"> {/* Ajoutez la classe w-full pour que le main prenne toute la largeur disponible */}
        <nav>
        <nav className=' shadow bg-white px-4 py-3 flex justify-between ml-64'>
      <div className=' flex items-center text-xl'>
        
        <span className=' font-semibold'>Liste des hôtels</span>
      </div>
      <div className='flex items-center gap-x-5'>
            <div className='relative md:w-65'>
                <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
                    <button className='p-1 focus:outline-none  md:text-black'><FaSearch/></button></span>
                <input type='text' className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block'/>
            </div>
            <div className=''>
                <IoIosNotificationsOutline className='  cursor-pointer'/>
            </div>
            <div className='relative'>
              <button className='text-black group'>
                <AiOutlineUser className='w-6 h-6 mt-1'/>
                <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
                  <ul className='py-2 text-sm text-gray-950'>
                    <li><a href=''>Pofile</a></li>
                    <li><a href=''>Setting</a></li>
                    <li><a href=''>Log Out</a></li>
                  </ul>
                </div>
              </button>
            </div>
           <div>
            <FiLogOut className=' me-4  h-6 cursor-pointer'></FiLogOut>
           </div>
      </div>
  
    </nav>
         <h1 className='text-lg font-bold bg-gray-100'>Dashboard</h1>
        </nav>
          <section className="bg-gray-100 p-4 rounded-md shadow-md flex justify-between items-center">
            
            <p className="text-xl font-bold">Bienvenue sur red prod</p>
            <br/>
            <p>Dashbord fortem ipson la meilleur hotel disponike</p>
          </section>
          <section className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-md shadow-md flex justify-center">
            <FontAwesomeIcon className="bg-purple-600 p-3 rounded-full" icon={faEnvelopeOpen} style={{color: "#f0f2f5",}} />            
            <p className="text-lg font-bold">125 </p>
            <p>Formulaires<br/>je ne sais pas quoi dire</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md flex justify-center">
            <FontAwesomeIcon className="bg-green-800 p-3 rounded-full" icon={faP} style={{color: "#f1f2f3",}} />
              <p className="text-lg font-bold">125 </p>
              <p>Formulaires<br/>je ne sais pas quoi dire</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md flex justify-center">
            <FontAwesomeIcon className="bg-yellow-600 p-3 rounded-full" icon={faUserGroup} style={{color: "#f7f7f8",}} />
              <p className="text-lg font-bold">125 </p>
              <p>Formulaires<br/>je ne sais pas quoi dire</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md flex justify-center">
            <FontAwesomeIcon className="bg-red-500 p-3 rounded-full" icon={faEnvelopeOpen} style={{color: "#f0f2f5",}} />            
              <p className="text-lg font-bold">25 </p>
              <p>Formulaires<br/>je ne sais pas quoi dire</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md flex justify-center">
            <FontAwesomeIcon className="bg-purple-800 p-3 rounded-full" icon={faP} style={{color: "#f1f2f3",}} />
              <p className="text-lg font-bold">125 </p>
              <p>Formulaires<br/>je ne sais pas quoi dire</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md flex justify-center">
            <FontAwesomeIcon className="bg-blue-900 p-3 rounded-full" icon={faUserGroup} style={{color: "#f7f7f8",}} />
              <p className="text-lg font-bold">125 </p>
              <p>Formulaires<br/>je ne sais pas quoi dire</p>
            </div>
          </section>

  
   






        </main>
      </div>
    </body>
  );
}

export default Dashboard;
