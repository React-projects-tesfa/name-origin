import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiFillGithub } from "react-icons/ai";

export default function Header({toggle}) {
  return (
    <div>
      <header className='flex flex-col items-center mx-8 md:mx-56 '>
      <nav className='py-10 mb-2 flex'>
            <h1 className=' text-white text-6xl font-burtons dark:text-white'>Name Origin</h1>
            {/* <BsFillMoonStarsFill onClick={toggle} className=' ml-4 text-3xl flex cursor-pointer dark:text-white'/> */}
            <a href='https://github.com/Tesfa-eth/name-origin'><AiFillGithub className=' ml-4 text-3xl text-gray-50 flex cursor-pointer animate-bounce hover:text-teal-400 hover:translate-y-1' /></a>
      </nav>
              <div className=" text-lg text-gray-100 dark:text-yellow-400 ">
              Name Origin is a web app that uses an api from <a className="text-gray-400 hover:text-teal-300" href="https://nationalize.io/">nationalize.io</a> to displays the probably origin of a name and its probably accuracy.
              Nationalize.io predicts the nationality of a person given their name
              </div>
      </header>
    </div>
  )
}
