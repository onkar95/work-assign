import React, { useEffect } from 'react'
import {Widget3} from '../widgets/Widget3'
import Widgets from '../widgets/index'

const MeetingAgenda = ({selectedWidgets}) => {
  let widgetId = Object.keys(selectedWidgets.widgetGroup1.widgetDetails)
  let widgets = Object.values(selectedWidgets.widgetGroup1.widgetDetails)

  let WComponent=Widgets[widgetId]
  useEffect(() => {
    widgets = Object.values(selectedWidgets)

  }, [selectedWidgets])

  return (
    <div  className="bg-primary-3 text-secondary-1 p-3 mb-3">
      <h2 className="w-max text-3xl font-semibold  mt-2 p-3">Meeting points</h2>
      {/* <div className='flex w-min-[30%] flex-wrap items-center justify-center'> */}
      <div className=' grid grid-cols-1 md:grid-cols-2 py-3'>
        {
          widgets && widgets[0].map((val, index) => (
            <WComponent widgetData={val} index={index} />
          ))
        }
      </div>

    </div>
  )
}

export default MeetingAgenda