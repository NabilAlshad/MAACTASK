import React from 'react'
import Avan from '../../../Assets/Aven.png';
import Amara from '../../../Assets/Amara.png';
import Circle from '../../../Assets/Circle.png'
import Kyan from '../../../Assets/Kyan.png';
import Treva from '../../../Assets/Treva.png';


export default function Teams() {

    const teams = [Avan, Amara, Circle, Kyan, Treva];
    return (
        <div className='teams'>
            <h2>5,000+ high-impact teams rely on Fieldx</h2>
            <div className="Teams">
                {teams.map((data) =>
                    <img alt="teams" className="me-5 mt-4" src={data}></img>)}
            </div>
        </div>
    )
}
