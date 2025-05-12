import React from 'react'

export const Widget1 = ({ widgetData, index }) => {
    // const dataItems = Object.entries(widgetData)
    return (
        <>


            <div className="m-2  bg-neutral-800 rounded-xl shadow-md overflow-hidden text-white 
                    hover:scale-105 transition duration-300 ease-in-out" key={index * index}>
                <div className="flex items-center justify-center">
                    <div className="p-7 text-center ">
                        <h3 className=" font-semibold mb-3 text-gray-200">{widgetData.title}</h3>
                        <div className="font-bold text-xl space-y-2 text-gray-50">
                            <p> {widgetData.value}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
