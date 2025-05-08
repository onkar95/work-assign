import React, { useEffect } from 'react'
import Widget4 from '../widgets/widget4'
import Widget5 from '../widgets/Widget5'
import { Widget1 } from '../widgets/Widget1'
import Widget6 from '../widgets/Widget6'

const ClientCommunication = ({ selectedWidgets }) => {
  console.log("communication", selectedWidgets)

  let widgets = Object.values(selectedWidgets)

  useEffect(() => {
    widgets = Object.values(selectedWidgets)
  }, [selectedWidgets])

  console.log("widgets", widgets)
  return (
    <div className="bg-neutral-900 p-3 mb-3">
      <div className='bg-neutral-950'>
        <h2 className="w-max text-2xl font-semibold  mt-2 text-gray-50 p-3">{selectedWidgets.first?.widgetTitle}</h2>
        <div className='flex  '>
          {
            selectedWidgets && selectedWidgets.first?.subWidget1?.map((val, index) => (
              <Widget5 widgetData={val} index={index} />
            ))
          }
        </div>
      </div>
      <div className='flex '>
        {
          selectedWidgets && selectedWidgets.second?.map((val, index) => (
            <Widget6 widgetData={val} index={index} />
          ))
        }
        {/* <Widget6 widgetData={selectedWidgets} index={index} /> */}

      </div>
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