import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <div className="row">
            <div className='footer'>
                <section className="col-md-4">
                    <div className='footerElements'>
                        {/* <div> */}
                        <h5 className='tags'>About Us</h5>
                        {/* <h5 className='tags'>About Us</h5> */}
                        <span className='tag'>
                            <p className='tag'>About Us</p>
                            <p className='tag'>Delivery</p>
                            <p className='tag'>Privacy policy</p>
                        </span>
                    </div>
                </section>
                <section className="col-md-4">
                    <div className='footerElements'>
                        <h5 className='tags'>My Account</h5>
                        <span className='tag'>
                            <p>My Account</p>
                            <p>Order History</p>
                            <p>Affiliates</p>
                            <p>News letter</p>
                        </span>
                    </div>
                </section>
                <section className="col-md-4">
                    <div className='footerElements'>
                        <h5 className='tags'>Customer Service</h5>
                        <span className='tag'>
                            <p>Return</p>
                            <p>Site Map</p>
                            <p>Brand</p>
                        </span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer;