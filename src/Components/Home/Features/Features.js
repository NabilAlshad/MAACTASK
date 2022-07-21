import React from 'react'
import { Container } from 'react-bootstrap'
import LeftSection from './LeftSection'
import MiddleSection from './MiddleSection'
import RightSection from './RightSection'
export default function Features() {

    return (
        <Container classNam="features">
            <div className="features-title">
                <h5>Products Features</h5>
                <h3>Make more out of your data</h3>
            </div>
            <div className="features-body">
                <LeftSection></LeftSection>
                <MiddleSection></MiddleSection>
                <RightSection></RightSection>

            </div>
        </Container>
    )
}
