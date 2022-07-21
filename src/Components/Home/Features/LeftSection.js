import React from 'react'
import Box from '../../../Assets/box.png';
export default function LeftSection() {

    const leftData = [{
        title: "Real-time analytics",
        description: "See product usage, sign-ins, feature metrics change as users work on your."
    }, {
        title: "Intuitive dashboard",
        description: "See product usage, sign-ins, feature metrics change as users work on your."
    }, {
        title: "Smart suggestions",
        description: "See product usage, sign-ins, feature metrics change as users work on your."
    }]
    return (
        <div className="Left-Section">
            {leftData.map((data) =>

                <div className="card">
                    <img alt='box-icon' src={Box}></img>
                    <h4>{data.title}</h4>
                    <h5>{data.description}</h5>
                </div>
            )
            }
        </div >
    )
}
