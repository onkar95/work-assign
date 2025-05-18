import React from 'react'
import { Widget1 } from '../widgets/Widget1'
import { Widget4 } from '../widgets/widget4'
import "./insights.css"
const Insights = ({ selectedWidgets }) => {

    return (
        <div className="bg-primary-3 text-secondary-1 p-3 mb-3 insights">

            <div class="report-container">
                <div class="curve-line"></div>

                <div class="section">
                    <div class="circle green"><span>🔍</span></div>
                    <h3 class="title green">Professional<br />Summary</h3>
                    <p>Family wealth goals on track,<br />educational trusts fully funded</p>
                </div>

                <div class="section">
                    <div class="circle blue"><span>🧠</span></div>
                    <h3 class="title blue">Key Risks</h3>
                    <p>Estate tax exposure increasing<br />due to appreciation.</p>
                </div>

                <div class="section">
                    <div class="circle teal"><span>🧬</span></div>
                    <h3 class="title teal">Opportunities</h3>
                    <p>New tax-efficient gifting<br />strategies available</p>
                </div>

                <div class="section">
                    <div class="circle gray"><span>🗂️</span></div>
                    <h3 class="title gray">Key Actions</h3>
                    <p>Review estate planning<br />Update charitable giving strategy.</p>
                </div>
            </div>


        </div>
    )

}

export default Insights