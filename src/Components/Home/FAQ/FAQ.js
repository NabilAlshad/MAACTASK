import React from 'react';
import { Accordion } from 'react-bootstrap';

function FAQ() {
    const faqTitles = ['What kind of data can I see in FieldX?', "Does Bizzy read my customers' data?", "What's your refund and cancellation policy?", "How do you take payments?", "Can I also track website analytics on fieldX?", "What makes Bizzy different from other analytics tools?"
    ];
    return (
        <div className="faq">
            <div className="faq-title">
                <h5>Common Question</h5>
                <h3>Frequently asked questions</h3>
            </div>
            <Accordion id="Accordion" defaultActiveKey="0">
                {
                    faqTitles.map((data, index) =>
                        <Accordion.Item id="Acordion-item" eventKey={index}>
                            <Accordion.Header>{data}</Accordion.Header>
                            <Accordion.Body>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.</Accordion.Body>
                        </Accordion.Item>
                    )}

            </Accordion>
        </div>
    );
}

export default FAQ;