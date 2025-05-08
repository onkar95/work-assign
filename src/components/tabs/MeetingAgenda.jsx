import React, { useEffect } from 'react'
import Widget3 from '../widgets/Widget3'

const MeetingAgenda = ({selectedWidgets}) => {
  console.log("riskanalysis", selectedWidgets)

  let widgets = Object.values(selectedWidgets)
  console.log("widgets", widgets)
  useEffect(() => {
    widgets = Object.values(selectedWidgets)

  }, [selectedWidgets])

  return (
    <div  className="bg-neutral-900 p-3 mb-3">
      <h2 className="w-max text-3xl font-semibold  mt-2 text-gray-50 p-3">Meeting points</h2>
      {/* <div className='flex w-min-[30%] flex-wrap items-center justify-center'> */}
      <div className=' grid grid-cols-1 md:grid-cols-2 py-3'>
        {
          widgets && widgets.map((val, index) => (
            <Widget3 widgetData={val} index={index} />
          ))
        }
      </div>

    </div>
  )
}

export default MeetingAgenda