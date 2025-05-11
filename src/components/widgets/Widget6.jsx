import React, { useEffect } from 'react'
import { Widget5 } from './Widget5'

export const Widget6 = ({ widgetData, index }) => {
    console.log("widgetData--6", widgetData)

    return (
        <div className="m-2 flex-1  bg-neutral-950 rounded-xl shadow-md overflow-hidden text-white"
            key={index * index}>
            <h2 className="w-max text-2xl font-semibold  mt-2 text-gray-50 p-3">{widgetData?.widgetTitle}</h2>
            <div className='flex '>
                {
                    widgetData?.widgetDetails && Object.values(widgetData?.widgetDetails)[0].map((val, index) => (
                        <Widget5 widgetData={val} index={index} />
                    ))
                }
            </div>
            <h2 className="w-max text-xl font-semibold  mt-2 text-gray-50 p-3">Tone Preference</h2>
            <div className="text-start">
                <div className="p-7 text-start ">
                    <h3 className=" font-bold mb-3 text-gray-200">{widgetData?.subtitle1}</h3>
                    <div className=" text-xs  text-gray-50">
                        <p> {widgetData?.text}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

