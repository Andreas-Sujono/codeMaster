import React from 'react'
import './style.scss'
import logo from 'assets/logo.png'

const Footer = (props) => {

    return(
        <div className="footer">
            <div class="row">
                <div className="logoLeft col-md-2 col-12">
                    <img src={logo} />
                </div>

                <div className="section1 col-md-4 col-12">
                    <h2> Services </h2>
                    <div class="contentSection1">
                        <ul>
                            <li>Front end</li>
                            <li>Back end</li>
                            <li>Machine Learning</li>
                            <li>Computer Science Basic</li>
                            <li>Mobile</li>
                        </ul>
                    </div>
                </div>

                <div className="section2 col-md-3 col-12">
                    <h2> Community </h2>
                    <div class="contentSection2">
                        <ul>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>

                <div className="section3 col-md-3 col-12">
                    <h2> Contact </h2>
                    <div class="contentSection3">
                        <ul>
                            <li>email: andr0075@e.ntu.edu.sg</li>
                        </ul>
                    </div>
                </div>

            </div>
            

        </div>
    )
}

export default Footer