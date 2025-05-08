import React from 'react'

const Widget5 = ({ widgetData, index }) => {
    console.log("WidgetData",widgetData)
    return (
        <div className="m-2 flex-1  bg-neutral-800 rounded-[6px] shadow-md overflow-hidden text-white"
            key={index * index}>
                
            <div className="text-start">
                <div className="p-3 text-start ">
                    <h3 className=" font-bold mb-3 text-gray-200">{widgetData?.title}</h3>
                    <div className=" text-xs  text-gray-50">
                        <p> {widgetData?.value}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Widget5