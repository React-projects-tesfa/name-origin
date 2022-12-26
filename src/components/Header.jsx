import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiFillGithub } from "react-icons/ai";

export default function Header({toggle}) {
  return (
    <div>
      <header className='flex flex-col items-center'>
      <nav className='py-10 mb-2 flex'>
            <h1 className=' text-white text-6xl font-burtons dark:text-white'>Name Origin</h1>
            {/* <BsFillMoonStarsFill onClick={toggle} className=' ml-4 text-3xl flex cursor-pointer dark:text-white'/> */}
            <AiFillGithub className='ml-4 text-3xl text-gray-50 flex cursor-pointer animate-bounce hover:text-gray-600' />
        </nav>
              <div className=" text-lg text-gray-100 dark:text-yellow-400 ">
              This react app uses an api to tell you the possible orgins of a name. 
              It will start to display results as you type in.
              </div>
      </header>
    </div>
  )
}
