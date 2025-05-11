// import React from 'react'

// const Overview = ({ selectedWidgets }) => {
//     console.log("overview", selectedWidgets)
//     const widgets = Object.values(selectedWidgets)
//     console.log("widgets",widgets)

//     return (
//         <>

//             <h2 className="text-3xl font-semibold mb-8 text-gray-800">Wealth Adviser Overview</h2>
//             <div className='flex'>
//                 {
//                     widgets && widgets.map((val, index) => {
//                         console.log("widgest array----", Object.entries(val))
//                         const dataItems = Object.entries(val.widgetData)
//                         console.log("dataItems", dataItems)
//                         return (
//                             <div className="p-6" key={index * index}>
//                                 <div className="flex">
//                                     {/* Personal Info Card */}
//                                     <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
//                                         <div className="p-6">
//                                             <h3 className="text-xl font-bold mb-3 text-gray-700">{val.widgetName}</h3>
//                                             <div className="space-y-2 text-gray-600">
//                                                 {dataItems && dataItems.map((item, index) => (

//                                                     <p key={item[0]}><span className="font-semibold">{item[0]}:</span> {item[1]}</p>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

// export default Overview


import React from 'react'
import Widgets from '../widgets/index'
import { useEffect } from 'react'

const Overview = ({ selectedWidgets }) => {

    
    console.log("overview", selectedWidgets)
    
    let widgetId = Object.keys(selectedWidgets.widgetGroup1.widgetDetails)
    let widgets = Object.values(selectedWidgets.widgetGroup1.widgetDetails)

    let WComponent=Widgets[widgetId]

    useEffect(() => {
        widgets = Object.values(selectedWidgets)

    }, [selectedWidgets])

    return (
        <div className="bg-neutral-900 p-3 mb-3">
            <h2 className="w-max text-3xl font-semibold  mt-2 text-gray-50 p-3">
                {selectedWidgets.widgetGroup1?.widgetTitle}</h2>
            <div className='w-min-[30%] grid grid-cols-2 md:grid-cols-3'>
                {
                    widgets && widgets[0].map((val, index) => (
                        <WComponent widgetData={val} index={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Overview