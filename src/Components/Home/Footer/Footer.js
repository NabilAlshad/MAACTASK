import React from 'react';
import FooterLogo from '../../../Assets/Footer-FieldX.png';
import Facebook from '../../../Assets/facebook.png';
import Twitter from '../../../Assets/013-twitter.png'
import Linkedin from '../../../Assets/010-linkedin.png'

export default function Footer() {
    const socials = [Facebook, Twitter, Linkedin];
    return (
        <div className='footer'>
            <div className="footer-head">
                <img src={FooterLogo} alt="logo" />
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque.</p>
            </div>
            <div className="socials">
                {socials.map((data) =>
                    <img src={data} alt="social-icon">

                    </img>)}
            </div>

            <div className="copyright">
                <hr></hr>
                <p>© All rights reserve by<span>MAAC</span></p>
            </div>
        </div>
    )
}
