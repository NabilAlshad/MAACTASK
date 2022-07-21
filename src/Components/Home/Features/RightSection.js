import React from 'react'
import Box from '../../../Assets/box.png'
export default function RightSection() {
    const RightData = [{
        title: "Multiple views",
        description: "See product usage, sign-ins, feature metrics change as users work on your."
    }, {
        title: "AI-led diagnoses",
        description: "See product usage, sign-ins, feature metrics change as users work on you."
    }, {
        title: "Responsive",
        description: "See product usage, sign-ins, feature metrics change as users work on your."
    }]
    return (
        <div className="Right-Section">{
            RightData.map((data) =>
                <div className="card">
                    <img alt="box-img" src={Box}></img>
                    <h4>{data.title}</h4>
                    <h5>{data.description}</h5>
                </div>


            )

        }
        </div>
    )
}
