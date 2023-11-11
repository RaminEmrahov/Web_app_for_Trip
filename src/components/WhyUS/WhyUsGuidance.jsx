import React from "react";
import { Reasons } from "../../utils/data";
import './WhyUsGuidance.css'


function WhyUsGuidance({ title, reasons }) {
    return (
        <div className="whyUs_Section tripPlan_Section">
            <div className="whyUs tripPlan">
                <h1>{title}</h1>
                <div className="reasons">
                    {reasons.map((reason, i) => (
                        <div key={i} className="reason">
                            <span>{reason.icon}</span>
                            <div>
                                <h4>{reason.title}</h4>
                                <p>{reason.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyUsGuidance;

