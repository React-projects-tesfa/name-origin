import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Header({toggle}) {
  return (
    <div>
      <header>
      <nav className='py-10 mb-12 flex justify-center'>
            <h1 className='header text-black text-xl font-burtons dark:text-white'>Name Origin</h1>
            <BsFillMoonStarsFill onClick={toggle} className=' ml-4 text-3xl flex cursor-pointer dark:text-white'/>
        </nav>
              <div className="header description">
              This react app uses an api to tell you the possible orgins of a name. 
              It will start to display results as you type in.
              </div>
        </header>
    </div>
  )
}
