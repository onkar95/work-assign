import React from 'react'

export const Widget1 = ({ widgetData, index }) => {
    // const dataItems = Object.entries(widgetData)
    return (
        <>


            <div className="m-2  bg-primary-2 rounded-xl shadow-md overflow-hidden text-secondary-1 
                    hover:scale-105 transition duration-300 ease-in-out" key={index * index}>
                <div className="flex items-center justify-center">
                    <div className="p-7 text-center ">
                        <h3 className=" font-semibold mb-3 text-secondary-2">{widgetData.title}</h3>
                        <div className="font-bold text-xl space-y-2 text-secondary-2 ">
                            <p> {widgetData.value}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
