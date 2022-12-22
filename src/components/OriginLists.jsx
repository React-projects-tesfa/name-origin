import React from 'react'

export default function OriginLists({nameOrigins}) {
  return (
    <div id="list-wrapper">
        {nameOrigins.map(function(origins, index){
                return(
                <div key={index} className="task-wrapper">
                
                <div>
                    <button className="btn btn-sm btn-outline-info disabled country">{index+1}. {origins.country_id} </button>
                    <button className="btn btn-sm btn-outline-warning disabled probability">{Math.round(origins.probability*100)} %</button>
                </div>
                </div>
                )
            })}
    
    </div>
  )
}
