import React, { useEffect } from 'react'
import {Widget4} from '../widgets/widget4'

const RiskAnalysis = ({ selectedWidgets }) => {


    return (
        <div className="bg-neutral-900 p-3 mb-3">
            <h2 className="w-max text-xl font-semibold  mt-2 text-gray-50 p-3">Wealth Adviser Overview</h2>
            <Widget4 />

        </div>
    )
}

export default RiskAnalysis