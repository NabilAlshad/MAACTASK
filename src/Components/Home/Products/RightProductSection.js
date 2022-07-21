import React from 'react'
import CEO from '../../../Assets/CEO.png';
export default function RightProductSection() {
    return (
        <div className='RightProductSection'>
            <h5>About us</h5>
            <h3>A dedicated solution for startups and enterprises</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="ceo">
                <img src={CEO} alt="ceo" />
                <div className="About-CEO">
                    <p>"Fieldx is for teams that care about their product growth." </p>
                    <h4>CEO, FieldX</h4>

                </div>
            </div>
        </div>
    )
}
