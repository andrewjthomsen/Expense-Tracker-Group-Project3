import * as React from "react";
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
import "../../assets/additionalcss/css/signup.css"
import "../../assets/additionalcss/css/mbr-additional.css"
import "../../assets/theme/css/style.css"
import "../../assets/web/assets/icons/icons.css"
import "../../assets/tether/tether.min.css"
import "../../assets/bootstrap/css/bootstrap.min.css"
import "../../assets/bootstrap/css/bootstrap-grid.min.css"
import "../../assets/dropdown/css/style.css"
import "../../assets/animatecss/animate.min.css"
import "../../assets/socicon/css/styles.css"



const NavBar = (props) => {

    return (

<section className="menu cid-roBIQr2OFc" once="menu" id="menu1-0">

    <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div className="menu-logo">
                <div className="navbar-brand">
                    <span className="navbar-logo">
                        
                             <img src="assets/images/owl-122x122.png" alt="" title="" height="4.4rem"/>
                        
                    </span>
                    <span className="navbar-caption-wrap"><a class="navbar-caption text-success display-2" href="/">Affluent</a></span>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                    <li class="nav-item">
                        <a className="nav-link link text-success display-4" href="/profile">
                        <span class="mbri-cash mbr-iconfont mbr-iconfont-btn"></span>  
                            Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link text-success display-4" href="/contactus"><span class="mbri-hot-cup mbr-iconfont mbr-iconfont-btn"></span>
                            About Us
                        </a>
                    </li>
                    
                </ul>

                <div className="navbar-buttons mbr-section-btn">
                    <a class="btn btn-sm btn-success-outline display-4" href="/signup">
                        <span className="mbri-save mbr-iconfont mbr-iconfont-btn "></span>
                        Try It Now!
                    </a>
                </div>
            </div>
        
    </nav>
</section>


);
}


  
export default NavBar; 