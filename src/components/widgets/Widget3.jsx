import React from 'react'

export const Widget3 = ({ widgetData, index }) => {
    return (

        <div className="m-2 bg-primary-2 text-secondary-1 rounded-xl shadow-md overflow-hidden 
                    hover:scale-105 transition duration-300 ease-in-out" key={index * index}>
            <div className="flex items-start flex-col p-6">
                <h3 className=" font-bold text-xl  mb-3 text-secondary-1"> {widgetData.title}</h3>
                <div className=" space-y-2 text-secondary-2">
                    <p> {widgetData?.value1}</p>
                    <p>{widgetData?.value2}</p>
                    <p>{widgetData?.value3}</p>
                </div>
                <p className='mt-5 text-secondary-1 text-xs'>{widgetData?.time}</p>
            </div>
        </div>


    )
}




// Sarah's Wealth Building Strategy Session (40 minutes total)
// Investment Basics Review
// Understanding Growth Potential
// Risk Tolerance Assessment
// Exploring Different Asset Classes
// 13 minutes
// Portfolio Allocation for Growth Current Allocation Analysis
// Identifying Growth Opportunities
// Diversification for Long-Term Gains
// 13 minutes
// Interactive Discussion & Action Items
// Addressing Specific Investment Goals
// Defining Initial Steps for Portfolio Adjustment
// 13 minutes
// Midnight