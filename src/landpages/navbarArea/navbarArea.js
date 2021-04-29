import React from 'react';

import FooterLogo from "../../assets/img/logos/footer-logo.png";
function navbarArea(props) {
    return (
        <div>
            <div class="navbar-area">
                <div class="mobile-nav">
                    <a href="index.html" class="logo">
                        <img src={ FooterLogo } alt="Logo" />
                    </a>
                </div>

                <div class="main-nav">
                    <div class="container-fluid">
                        <nav class="container-max navbar navbar-expand-md navbar-light">
                            <a class="navbar-brand" href="index.html">
                                <img src={ props.logoimg } alt="Logo" />
                            </a>
                            <div
                                class="collapse navbar-collapse mean-menu"
                                id="navbarSupportedContent"
                            >
                                <ul class="navbar-nav m-auto">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link active">
                                            Looking for ...
                    <i class="bx bx-chevron-down"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a href="#" class="nav-link  ">
                                                    Looking for housing?
                      </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link"> Looking for housing?</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link"> Do you want to invest in real estate? </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link"> Corporate </a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link"> People & Careers </a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link"> Help Center</a>
                                    </li>
                                </ul>
                                <div class="side-btn-area">
                                    <a href="tel:+39 02 36697390" class="call-btn">
                                        <i class="bx bx-phone"></i>
                                       + 39 02 36697390
                </a>
                                </div>
                                <div class="appointment-btn">
                                    <a href="#" class="default-btn default-bg-buttercup">
                                        Reserved Area
                  <i class="bx bx-right-arrow-alt"></i>
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default navbarArea;



