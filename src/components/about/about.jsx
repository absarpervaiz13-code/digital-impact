import React from "react";
import './about.css'
import realstate from '../../assets/Estate.jpg'
import education from '../../assets/Education.jpg'
import comerce from '../../assets/Commerce.jpg'
import hospitality from '../../assets/Hospitality.jpg'
import healthcare from '../../assets/Health-Care.jpg'
import fintech from '../../assets/Fintech.jpg'

const About = () => {
    return (
        <>
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
            <div>EVERYTHING YOU NEED TO KNOW ABOUT</div>
        </>
    )
}
export default About