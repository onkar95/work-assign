import React from 'react'

export const Widget5 = ({ widgetData, index }) => {
    console.log("WidgetData", widgetData)
    return (
        <div className="m-2 flex-1  bg-primary-2 rounded-[6px] shadow-md overflow-hidden text-secondary-2"
            key={index * index}>

            <div className="text-start">
                <div className="p-3 text-start ">
                    <h3 className="font-bold mb-3 text-secondary-3">{widgetData?.title}</h3>
                    <div className="text-xs text-secondary-2">
                        <p className="text-xs text-secondary-2"> {widgetData?.value}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

