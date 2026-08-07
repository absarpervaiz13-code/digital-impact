import React from "react";
import './home.css'
import digitalimpacthome from '../../assets/digital-impact-home.jpg'
import realstate from '../../assets/Estate.jpg'
import education from '../../assets/Education.jpg'
import comerce from '../../assets/Commerce.jpg'
import hospitality from '../../assets/Hospitality.jpg'
import healthcare from '../../assets/Health-Care.jpg'
import fintech from '../../assets/Fintech.jpg'
import revive from '../../assets/Revive.jpg'
import voeux from '../../assets/Voeux.jpg'
import thekings from '../../assets/The Kingz.jpg'
import unifresh from '../../assets/Unifresh.jpg'
import { FaReact } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <main>
                <img className="img-2" src={digitalimpacthome} alt="" width={600} />
                <div className="content">
                    <div className="cont-1">We are full Services</div>
                    <div className="sub-cont">
                        <div className="cont-2">Digital Marketing Agency</div>
                        <div className="cont-3">Welcome to the Digital Impacts</div>
                        <div className="line"></div>
                        <div className="cont-4">We partner with our clients with a team of professionals, we are able to provide <br />
                            the best on our side. We strive to be leaders in digital marketing services worldwide <br />
                            by revolutionizing the industry and setting new standards of professionalism and success.
                        </div>
                        <button className="cont-btt">Message Us Now</button>
                    </div>
                </div>
            </main>

            <div className="serv-cont">
                <div>We <span>Provide</span> The Best</div>
                <div>Services With <span>Our</span></div>
                <div><span>Developers</span></div>
            </div>
            <div>
                <div className="boxes">
                    <div className="Box-1">
                        <div className="box-name">Digital Marketing</div>
                        <div className="box-cont">
                            <div>the digital impact have</div>
                            <div>compiled the list of best</div>
                            <div>digital marketing companies in</div>
                            <div>the world</div>
                        </div>
                    </div>
                    <div className="Box-1">
                        <div className="box-name">Web development</div>
                        <div className="box-cont">
                            <div>Web design services comprise </div>
                            <div>the process of user interface</div>
                            <div>(UI) and user experience (UX) </div>
                            <div> design of any web-based </div>
                            <div>solution.</div>
                        </div>
                    </div>
                    <div className="Box-1">
                        <div className="box-name">Graphic Designing</div>
                        <div className="box-cont" ><div>Create visual concepts to </div>
                            <div>communicate ideas that</div>
                            <div>inspire and captivate</div>
                            <div>consumers, creative thinking,</div>
                            <div>an aptitude towards art </div>
                            <div>and design</div>
                        </div>
                    </div>
                    <div className="box-2">
                        <div className="Box-1">
                            <div className="box-name">Digital Marketing</div>
                            <div className="box-cont">
                                <div>the digital impact have</div>
                                <div>compiled the list of best</div>
                                <div>digital marketing companies in</div>
                                <div>the world</div>
                            </div>
                        </div>
                        <div className="Box-1">
                            <div className="box-name">Digital Marketing</div>
                            <div className="box-cont">
                                <div>the digital impact have</div>
                                <div>compiled the list of best</div>
                                <div>digital marketing companies in</div>
                                <div>the world</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abtt-cont">
                <div className="abtt-cont-1">
                    <div>Industries We</div>
                    <div className="abtt-cont-1-div-2">Work With</div>
                </div>
                <div className="abtt-cont-2">
                    <div>We work as a technology partner for various industries</div>
                    <div>Our expertise can be applied to the specific demands</div>
                    <div>and nuances in your industry</div>
                </div>
            </div>
            <div className="abtt-icons">
                <div className="abtt-icon-main">
                    <div className="abtt-icon-css">
                        <img src={realstate} alt="" width={210} />
                        <div>REAL ESTATE</div>
                    </div>
                    <div className="abtt-icon-css">
                        <img src={education} alt="" width={210} />
                        <div>EDUCATION</div>
                    </div>
                    <div className="abtt-icon-css">
                        <img src={comerce} alt="" width={210} />
                        <div>COMMERCE</div>
                    </div>
                </div>
                <div className="abtt-icon-main">
                    <div className="abtt-icon-css">
                        <img src={hospitality} alt="" width={210} />
                        <div>HOSPITALITY</div>
                    </div>
                    <div className="abtt-icon-css">
                        <img src={healthcare} alt="" width={210} />
                        <div>HEALTHCARE</div>
                    </div>
                    <div className="abtt-icon-css">
                        <img src={fintech} alt="" width={210} />
                        <div>FINTECH</div>
                    </div>
                </div>
            </div>

<div className="folio-main">
                <div className="folio-heading">EVERYTHING YOU NEED TO KNOW ABOUT</div>
                <div className="folio-cont-main">
                    <div className="folio-cont">
                        <div className="folio-cont-title">THE DIGITAL IMPACTS</div>
                        <div className="folio-cont-weight">
                            <div>The <span className="folio-span">Digital Impacts</span> create a perfect company for its customers. <span className="folio-span">Digital Impacts</span> offers the best services to ensure</div>
                            <div>your business thrives online. Because we partner with our clients with a team of professionals, we can to provide the</div>
                            <div>best on our side. We strive to be leaders in digital marketing services worldwide by revolutionizing the industry and</div>
                            <div>setting new standards of professionalism and success.</div>
                        </div>
                    </div>
                    <div className="folio-cont">
                        <div className="folio-cont-title">OUR VISION</div>
                        <div className="folio-cont-weight">
                            <div>We strive to be leaders in digital marketing services across the world by revolutionizing the industry and setting new</div>
                            <div>standards of professionalism and success. Our vision is to become a top agency offering online marketing strategies,</div>
                            <div>digital sales solutions, and internet brand management in the international business sphere.</div>
                        </div>
                    </div>
                    <div className="folio-cont">
                        <div className="folio-cont-title">OUR MISSION</div>
                        <div className="folio-cont-weight">
                            <div>Our mission is to partner with customers for their success as we create diverse client base including companies and</div>
                            <div>individuals functioning in many different fields and economies. We will be best in providing consistently successful,</div>
                            <div>unique, and forward-thinking digital marketing solutions that take into account the individual requirements and unique</div>
                            <div>demands of each client.</div>
                        </div>
                    </div>
                </div>
                <div className="folio-boxrs-div">
                    <div className="folio-boxes-1">
                        <div>10000+</div>
                        <div>Domain Name register</div>
                    </div>
                    <div className="folio-boxes-2">
                        <div>90000+</div>
                        <div>Website Hosted</div>
                    </div>
                    <div className="folio-boxes-3">
                        <div>45000+</div>
                        <div>
                            customers
                        </div>
                    </div>
                </div>
                <div className="folio-heading-2">Projects We've Deliverd</div>
                <div className="folio-main-2">Over the past 10 years, we have designed and built a wide range of high-quality products from scratch. Our team has finished various web <br /> and mobile apps related to various spheres including e-learning, healthcare, e-commerce, advertising, augmented reality, action sports, <br /> finance and sharing economy.
                </div>
                <div className="folio-reviews">
                    <div className="folio-reviews-1">
                        <div className="rewiews-1-lines">
                            <div>INDUSTRY</div>
                            <div className="revive">REVIVE</div>
                            <div>Revive Beauty Salon & instiute</div>
                            <div>WEB DEVELOPMENT</div>
                            <div>QUALITY ASSRANCE</div>
                        </div>
                        <img src={revive} alt="" width={500} height={500} />
                    </div>
                    <div className="folio-reviews-1">
                        <img src={voeux} alt="" width={500} height={500} />
                        <div className="rewiews-1-lines">
                            <div>INDUSTRY</div>
                            <div className="revive">Voeux</div>
                            <div>Revive Beauty Salon & instiute</div>
                            <div>WEB DEVELOPMENT</div>
                            <div>QUALITY ASSRANCE</div>
                        </div>
                    </div>
                    <div className="folio-reviews-1">
                        <div className="rewiews-1-lines">
                            <div>INDUSTRY</div>
                            <div className="revive">The Kingz</div>
                            <div>Revive Beauty Salon & instiute</div>
                            <div>WEB DEVELOPMENT</div>
                            <div>QUALITY ASSRANCE</div>
                        </div>
                        <img src={thekings} alt="" width={500} height={500} />
                    </div>
                    <div className="folio-reviews-1">
                        <img src={unifresh} alt="" width={500} height={500} />
                        <div className="rewiews-1-lines">
                            <div>INDUSTRY</div>
                            <div className="revive">Unifresh</div>
                            <div>Revive Beauty Salon & instiute</div>
                            <div>WEB DEVELOPMENT</div>
                            <div>QUALITY ASSRANCE</div>
                        </div>
                    </div>
                    <div className="folio-text-3">
                        <div>Feel Free To <span>Contact</span> Us By Submitting</div>
                        <div>Form Or Contact Live Support</div>
                    </div>
                </div>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d18888.50941887474!2d-2.128079!3d53.717128!3m2!1i1024!2i768!4f13.1!2m1!1sOldham%20Graham%2C%20Manchester%C2%A0UK!5e0!3m2!1sen!2sus!4v1786081288490!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}
            </div>

     
        </>

    )

}
export default Home