import React, { useEffect } from 'react'
import { Widget4 } from '../widgets/widget4'
import { Widget5 } from '../widgets/Widget5'
import { Widget1 } from '../widgets/Widget1'
import { Widget6 } from '../widgets/Widget6'
import Widgets from '../widgets/index'

const ClientCommunication = ({ selectedWidgets }) => {
  console.log("communication", selectedWidgets)

  let allWidgets = Object.values(selectedWidgets)
  console.log("allWidgets", allWidgets)

  // let widgets = Object.values(selectedWidgets)


  // useEffect(() => {
  //   widgets = Object.values(selectedWidgets)
  // }, [selectedWidgets])

  // console.log("widgets", widgets)
  return (
    <div className="bg-primary-4 text-secondary-1 p-3 mb-3">
      {
        allWidgets && allWidgets.map((val, index) => {
          let widgetId = Object.keys(val.widgetDetails)
          let widgetGroupDetails = Object.values(val.widgetDetails)

          let WComponent = Widgets[widgetId]

          return (
            <div className='bg-primary-3 text-secondary-1'>
              <h2 className="w-max text-2xl font-semibold  mt-2  p-3">{val?.widgetTitle}</h2>
              <div className='flex flex-col  md:flex-row'>
                {
                  widgetGroupDetails && widgetGroupDetails[0]?.map((val, index) => (
                    <WComponent widgetData={val} index={index} />
                  ))
                }
              </div>
            </div>
          )
        })
      }
      {/* <div className='bg-neutral-950'>
        <h2 className="w-max text-2xl font-semibold  mt-2 text-gray-50 p-3">{selectedWidgets.widgetGroup1?.widgetTitle}</h2>
        <div className='flex  '>
          {
            widgetGroup1Details && widgetGroup1Details[0]?.map((val, index) => (
              <WComponent1 widgetData={val} index={index} />
            ))
          }
        </div>
      </div> */}
      {/* <div className='flex '>
        {
          widgetGroup2Details && widgetGroup2Details[0]?.map((val, index) => (
            <WComponent2 widgetData={val} index={index} />
          ))
        }

      </div> */}
    </div>
  )
}

export default ClientCommunication


// Q
// Overview
// Insights
// Risk Analysis
// Meeting Agenda Client Communication
// Tone Preference
// Technical Level
// Basic
// Key Topics
// Topics
// Portfolio Basics

// Formality
// Casual
// Detail Depth Overview

// Focus Area
// • Understanding asset classes
// • Building a diversified portfolio
// • Setting financial goals

// Midnight