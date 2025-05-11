import React from 'react'

export const Widget2 = ({ widgetData, index }) => {
    // const dataItems = Object.entries(WidgetData)
    return (
        <>


            <div className="m-2  bg-white rounded-xl shadow-md overflow-hidden 
                    hover:scale-105 transition duration-300 ease-in-out" key={index * index}>
                <div className="flex items-center justify-center">
                    <div className="">
                        <div className="p-7 text-center ">
                            <h3 className=" font-semibold mb-3 text-gray-600">{WidgetData.title}</h3>
                            <div className="font-bold text-xl space-y-2 text-gray-700">
                                <p> {WidgetData.value}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
