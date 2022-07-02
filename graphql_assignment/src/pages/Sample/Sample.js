import React from 'react'
import { Link } from 'react-router-dom'
import './Sample.css'
import '../../App.css'
import Navbar from '../../components/Navbar/Navbar'
/**
* @author
* @function Sample
**/

const Sample = (props) => {
    return (
        <div className="sample2">
            <Navbar />
            
            <div className="hero-section">
                <div className='image-text'>
                <div className="hero-image-container flex">
                        <div className="left-side-image">
                            <p className="graphical-image"></p>
                        </div>
                        <img className="right-side-image" src={'/images/amy-shamblen-Wm3EU84mWeg-unsplash.jpg'} alt='front-page' />
                    </div>
                    <div className='overlapping-content'>
                        <h2 className="text-left large-headings">Small Intro</h2>
                        <p className="text-left">This is the sample text where a little description of your services will be mentioned.This is the sample text where a little description of your services will be mentioned.</p>
                        <input type='submit' value='READ MORE' className='button-primary' />
                    </div>
                </div>
                  
                
            </div>
            
            <div className="flex justify-center item-center cards-section">
                <div>
                    <p className="graphical-image-rectangle"></p>
                </div>
                <div className="cards-container flex justify-center item-center">
                    <div>
                        <div className="card flex column-flex justify-center item-center">
                            <i className="fa fa-area-chart"></i>
                            <h2>Sample Headline</h2>
                            <p className="text-center">This is the sample text where a little description of your services will be mentioned.</p>
                        </div>
                        <div className="card flex column-flex justify-center item-center">
                            <i className="fa fa-area-chart"></i>
                            <h2>Sample Headline</h2>
                            <p className="text-center">This is the sample text where a little description of your services will be mentioned.</p>
                        </div>
                    </div>
                    <div className="right-side-cards">

                        <div className="card flex column-flex justify-center item-center">
                            <i className="fa fa-area-chart"></i>
                            <h2>Sample Headline</h2>
                            <p className="text-center">This is the sample text where a little description of your services will be mentioned.</p>
                        </div>
                        <div className="card flex column-flex justify-center item-center">
                            <i className="fa fa-area-chart"></i>
                            <h2>Sample Headline</h2>
                            <p className="text-center">This is the sample text where a little description of your services will be mentioned.</p>
                        </div>
                    </div>
                </div>
                <div className="cards-sibling">
                    <h4>ABOUT</h4>
                    <h2 className="medium-headings text-left">Need Amazing Design?</h2>
                    <p className='card-text'>
                        This is the sample text where a little description of your services will be mentioned.This is the sample text where a little description of your services will be mentioned.This is the sample text where a little description of your services will be mentioned.This is the sample text where a little description of your services will be mentioned.This is the sample text where a little description of your services will be mentioned.
             </p>
                    <input type='submit' className="button-primary" value='READ MORE' />
                </div>
            </div>  

            <div className="info-section flex justify-center item-center">
                <div>
                    <p className="graphical-image-rectangle-lower"></p>
                </div>
                <div >
                    <p className="graphical-image-lower"></p>
                </div>
                <img className="info-image" src={'/images/prof-sample2.jpg'} alt='information' />
                <div className="info-container pl-10">
                    <h2 className="medium-headings text-left">Web Development & Design</h2>
                    <p className="text-center text-left">Quickly incentivize impactful action items before tactical collaboration and idea-sharing. Monotonically engage market-driven intellectual capital  wireless opportunities. Progressively network performance based services for functionalized testing procedures.</p>
                    <Link className="button-secondary" to="/">LEARN MORE</Link>
                </div>
            </div>

            <section className="flex aboutUs-section justify-center item-center">
                <div>
                    <p className="graphical-image-aboutUs"></p>
                </div>
                <div>
                    <p className="graphical-image-aboutUs-square"></p>
                </div>
                <img className="aboutUs-image" src={'/images/daniel-korpai-mxPiMiz7KCo-unsplash.jpg'} alt='aboutUs' />
                <div className="aboutUs-text pl-10">
                    <p>Quickly incentivize impactful action items before tactical collaboration and idea-sharing. Monotonically engage market-driven intellectual capital  wireless opportunities. Progressively network performance based services for functionalized testing procedures.</p>
                    <input type='submit' className="button-primary" value='READ MORE' />
                </div>
            </section>
            <h1 className="text-center team-heading">OUR PERFECT TEAM</h1>
            <section className="flex team-member-section">
                <div >
                    <p className="graphical-image-recFull"></p>
                </div>
                <div className="team-member-card flex">

                    <img className="team-member" src={'/images/4.jpg'} alt='team-member' />

                
                    <div className="item-center">
                        <h2 className="text-left-team">Name of member</h2>
                        <p className="text-left-team">Job profile</p>
                        <p className="text-left-team"> This is the sample text where a little description of his/her job</p>

                        <ul className="flex item-left">
                            <li><Link to='/'><i className='fa fa-facebook'></i></Link></li>
                            <li><Link to='/'><i className='fa fa-twitter'></i></Link></li>
                            <li><Link to='/'><i className='fa fa-instagram'></i></Link></li>
                            <li><Link to='/'><i className='fa fa-linkedin'></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="team-member-card flex flexscss">
                    <img className="team-member" src={'/images/5.jpg'} alt='team-member' />
                    <div className="item-center">
                        <h2 className="text-left-team">Name of member</h2>
                        <p className="text-left-team">Job profile</p>
                        <p className="text-left-team"> This is the sample text where a little description of his/her job</p>
                        <ul className="flex item-left">
                            <li><Link to='/'><i className='fa fa-facebook'></i></Link></li>
                            <li><Link to='/'><i className='fa fa-twitter'></i></Link></li>
                            <li><Link to='/'><i className='fa fa-instagram'></i></Link></li>
                            <li><Link to='/'><i className='fa fa-linkedin'></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="team-member-card flex">
                    <img className="team-member" src={'/images/7.jpg'} alt='team-member' />
                    <div className="item-center">
                        <h2 className="text-left-team">Name of member</h2>
                        <p className="text-left-team">Job profile</p>
                        <p className="text-left-team"> This is the sample text where a little description of his/her job</p>
                        <ul className="flex item-left">
                            <li><Link to='/'><i className='fa fa-facebook'></i></Link></li>
                            <li><Link to='/'><i className='fa fa-twitter'></i></Link></li>
                            <li><Link to='/'><i className='fa fa-instagram'></i></Link></li>
                            <li><Link to='/'><i className='fa fa-linkedin'></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="team-member-card flex">
                    <img className="team-member" src={'/images/7.jpg'} alt='team-member' />
                    <div className="item-center">
                        <h2 className="text-left-team">Name of member</h2>
                        <p className="text-left-team">Job profile</p>
                        <p className="text-left-team"> This is the sample text where a little description of his/her job</p>

                        <ul className="flex item-left">
                            <li><Link to='/'><i className='fa fa-facebook'></i></Link></li>
                            <li><Link to='/'><i className='fa fa-twitter'></i></Link></li>
                            <li><Link to='/'><i className='fa fa-instagram'></i></Link></li>
                            <li><Link ><i className='fa fa-linkedin'></i></Link></li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="team-info flex justify-center item-center">
                <input className='button-primary' style={{ marginBottom: '30px' }} type='submit' value='LEARN MORE' />
            </div>


            <section className="flex branding-section">
                <img className="branding-info-image" src={'/images/xps-7ZWVnVSaafY-unsplash.jpg'} alt='brand' />
                <div className="branding-info-text">    
                    <h2 className="brand-heading">Branding</h2>
                    <p className="brand-text">Quickly incentivize impactful action items before tactical collaboration and idea-sharing. Monotonically engage market-driven intellectual capital  wireless opportunities. Progressively network performance based services for functionalized testing procedures.</p>
                    <input type='submit' className="brand-button" value='READ MORE' />
                </div>
            </section>

            <section className="flex justify-center column-flex item-center contactUs-section">
                <h2 className="medium-headings contact-heading" style={{ color: 'rgb(241, 197, 14)' }}>Contact Us</h2>
                <p className="text-center contact-text">
                    We align leaders around a shared purpose and strategic story that catalyzes their business and brand to take action.
           </p>

                <div className="flex footer-elements">
                    <div className='address flex column-flex justify-center item-center'>
                        <i className="fa fa-envelope-open"></i>
                        <h2>Address</h2>
                        <p>121 Rock Sreet, 21 Avenue,</p>
                        <p>New York, NY 92103-9000</p>
                    </div>
                    <div className="mail flex column-flex justify-center item-center">
                        <i className="fa fa-map-marker"></i>
                        <h2>Email:</h2>
                        <p>hello@company.com</p>
                        <p>support@company.com</p>
                    </div>
                    <div className="phone flex column-flex justify-center item-center">
                        <i className="fa fa-phone"></i>
                        <h2>Call Us:</h2>
                        <p>1 (234) 567-891</p>
                        <p>1 (234) 567-891</p>
                    </div>
                </div>

            </section>

            <div className="google-map-container">

            </div>
        </div>
    )

}

export default Sample