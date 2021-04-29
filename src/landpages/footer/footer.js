import React from 'react';

function footer(props) {
    return (
        <div>

            <div class="newsletter-area pt-100 pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="newsletter-content">
                                <i class="flaticon-email"></i>
                                <h2>Join our weekly <b>Newsletter</b></h2>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="newsletter-form-area">
                                <form
                                    class="newsletter-form"
                                    data-toggle="validator"
                                    method="POST"
                                >
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="Your Email*"
                                        name="EMAIL"
                                        required
                                        autocomplete="off"
                                    />
                                    <button class="default-btn" type="submit">
                                        Subscribe
                  <i class="bx bx-right-arrow-alt"></i>
                                    </button>
                                    <div id="validator-newsletter" class="form-result"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer-area">
                <div class="footer-top pt-100 pb-70">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-xxl-3 col-md-6">
                                <div class="single-footer-widget">
                                    <a href="index-4.html" class="logo">
                                        <img src={ props.logoimg } alt="Logo" />
                                    </a>
                                    <p>
                                        Lorem ipsum dolor sit ame consectetur adisicing elitsed do
                                        eiusmod tempor labet dolore magna aliquaUt
                </p>
                                    <ul class="social-link">
                                        <li>
                                            <a href="#" target="_blank"
                                            ><i class="bx bxl-facebook"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"
                                            ><i class="bx bxl-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"
                                            ><i class="bx bxl-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"
                                            ><i class="bx bxl-pinterest-alt"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"
                                            ><i class="bx bxl-youtube"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-xxl-3 col-md-6">
                                <div class="single-footer-widget pl-70">
                                    <h3>SERVICES</h3>
                                    <ul class="footer-list">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i class="bx bx-plus"></i>
                      Property on Sale
                    </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i class="bx bx-plus"></i>
                      About Us
                    </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i class="bx bx-plus"></i>
                     Says about us
                    </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i class="bx bx-plus"></i>
                     Join the team

                    </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i class="bx bx-plus"></i>
                   News&Events
                    </a>
                                        </li>

                                        <li>
                                            <a href="#" target="_blank">
                                                <i class="bx bx-plus"></i>
                                                How it works
                    </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i class="bx bx-plus"></i>
                                                Discover the city districts
                    </a>
                                        </li>


                                        <li>
                                            <a href="#" target="_blank">
                                                <i class="bx bx-plus"></i>
                                                Services
                    </a>
                                        </li>

                                        <li>
                                            <a href="#" target="_blank">
                                                <i class="bx bx-plus"></i>
                                                Do you have a property to rent?
                    </a>
                                        </li>


                                        <li>
                                            <a href="#" target="_blank">
                                                <i class="bx bx-plus"></i>
                                                Are you a property owner
                    </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-xxl-3 col-md-6">
                                <div class="single-footer-widget pl-3">
                                    <h3>Discover our cities</h3>
                                    <ul class="footer-contact-list">
                                        <li><span>Milan</span>     <a href="#"> Discover Now </a></li>
                                        <li><span>Bologna</span>    <a href="#"> Discover Now </a>  </li>
                                        <li> <span>Rome    <a href="#"> Discover Now </a></span> </li>
                                        <li> <span>Turin    <a href="#"> Discover Now </a></span> </li>
                                        <li> <span>Padova    <a href="#"> Discover Now </a></span> </li>
                                        <li> <span>Trento    <a href="#"> Discover Now </a></span> </li>
                                        <li> <span>Madrid     <a href="#"> Discover Now </a></span> </li>
                                        <li> <span>Paris    <a href="#"> Discover Now </a></span> </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-xxl-3 col-md-6">
                                <div class="single-footer-widget pl-3">
                                    <h3>Discover our cities</h3>
                                    <ul class="footer-contact-list">
                                        <li><span>Do you have a property to rent?</span>     </li>
                                        <li><span>BoloAre you a property ownergna</span>      </li>
                                        <li> <span>Are you an estate agent     </span> </li>
                                        <li> <span>How it works     </span> </li>
                                        <li> <span>Do you want to invest in real estate?   </span> </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <div class="bottom-text">
                            <p>
                                Viale Stelvio 66, 20159 Milan - tel: +39 02 36697390  VAT No. 00406960732 - R.E.A. (Economic Administrative Index) MI-1838078 - Share capital, fully paid in: 1.315.366,81 Euros  Privacy Policy Terms of use Cookies policy Copyright© DoveVivo S.p.A. 2015
                                Copyright ©2021  <a href="https://dilavermusa.com/" target="_blank"> Eri Musa</a>. All Rights Reserved by

                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default footer;