import React from 'react';
import Signature from '../../assets/img/signature.png';
function faward(props) {
    return (
        <div>

            <div class="forward-area mt-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="forward-img">
                                <img src="https://cdn.dovevivo.it//images/people_and_careers/pc_slide1.jpg" alt="Images" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="forward-content">
                                <div class="section-title">
                                    <span>Message FRom Company</span>
                                    <h2>Go Forward With <b>Us</b></h2>
                                    <p>
                                        Lorem ipsum dolor sit ame consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliquaUt
                                        enim ad minim vequis nostrud exercitation
                </p>
                                </div>
                                <div class="signature">
                                    <ul>
                                        <li>
                                            <img src={ Signature } alt="Images" />
                                        </li>
                                        <li>
                                            <h3>Your Name</h3>
                                            <span>Company Owner</span>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" class="default-btn default-bg-buttercup">
                                    Finalize Meeting
                <i class="bx bx-right-arrow-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default faward;