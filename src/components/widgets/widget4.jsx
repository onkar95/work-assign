import React from 'react'
import './widget4.css'

export const Widget4 = () => {
    const rotation = (60 / 180) * 180; // Assuming max speed is 180
    return (

        <div className='bg-primary-2 w-[300px] flex items-center justify-center p-3'>
            <div className="speedometer bg-primary-1">
                {/* <div className="needle" style={{ transform: `rotate(${rotation}deg)` }}></div> */}
            </div>
        </div >


    )
}
