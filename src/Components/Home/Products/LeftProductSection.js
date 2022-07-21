import React from 'react'
import Delivery from '../../../Assets/Pre order vs delivery 1.png'
import TopSelling from '../../../Assets/Top Selling Routes 1.png'
import Avg from '../../../Assets/Avg 1.png'
export default function LeftProductSection() {
    return (
        <div className='LeftProductSection'>
            <img src={Delivery} alt="preorder vs delivery"></img>
            <div className="SellingSection">
                <img src={TopSelling} alt="Top selling products" />
                <img className="Avg" src={Avg} alt="average" />
            </div>
        </div>
    )
}
