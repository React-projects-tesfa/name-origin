import React, {useState} from 'react'
import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
  let [color, setColor] = useState("#ffffff");
  return (
    <div className='flex justify-center mt-2'>
      <BeatLoader
        color={color}
        loading={true}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
