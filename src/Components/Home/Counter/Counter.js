import React from 'react'
import Monitor from '../../../Assets/monitor-mobbile.png';
import Cup from '../../../Assets/cup.png';
import People from '../../../Assets/people.png'
import User from '../../../Assets/user.png';
export default function Counter() {
    const counterData = [
        {
            image: Monitor,
            number: "10+",
            title: "Platforms Created"
        },
        {
            image: People,
            number: "1559+",
            title: "Total Users"
        },
        {
            image: User,
            number: "10+",
            title: "Total Clients"
        },
        {
            image: Cup,
            number: "300Days",
            title: "In Operations"
        }

    ]
    return (
        <div className='Counter'>
            {counterData.map((data) =>
                <div className="counter-body">
                    <img src={data.image} alt="counter-pic" />
                    <h3>{data.number}</h3>
                    <h5>{data.title}</h5>

                </div>)}
        </div>
    )
}
