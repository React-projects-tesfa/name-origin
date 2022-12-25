import React from 'react'

export default function OriginLists({nameOrigins, showMoreToggle, showMore, getCountryName, label}) {
  return (
    <div className=' flex flex-col items-center'>
      <div >
        {nameOrigins.map(function(origins, index){
                return(
                <div key={index}>
                <div>
                {/* {origins.country_id} */}
                  { index < 3 ? <p className='text-white text-2xl mt-2 '>{index+1}. {label[index]} {Math.round(origins.probability*100)}%</p> :""}
                </div>
                </div>
                )
            })}
       </div>

       { nameOrigins.length ? <div onClick={showMoreToggle} className=' mt-3 w-30 h-12 text-white cursor-pointer bg-orange-500 p-2 rounded hover:bg-slate-400'><a>{showMore ? "Show Less" : "Show Detail"}</a></div>: ""}
    
    </div>
  )
}
