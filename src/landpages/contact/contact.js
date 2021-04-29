import React from 'react';

function contact(props) {
    return (
        <div>

            <div class="contact-area">
                <div class="container">
                    <div class="contact-option">
                        <div class="contact-form">
                            <span>SEND MESSAGE</span>
                            <h2>Contact With Us</h2>
                            <form id="contactForm">
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6">
                                        <div class="form-group">
                                            <i class="bx bx-user"></i>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                class="form-control"
                                                required
                                                data-error="Please enter your name"
                                                placeholder="Your Name*"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6">
                                        <div class="form-group">
                                            <i class="bx bx-user"></i>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                class="form-control"
                                                required
                                                data-error="Please enter your email"
                                                placeholder="Email*"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-sm-12">
                                        <div class="form-group">
                                            <i class="bx bx-phone"></i>
                                            <input
                                                type="text"
                                                name="phone_number"
                                                id="phone_number"
                                                required
                                                data-error="Please enter your number"
                                                class="form-control"
                                                placeholder="Your Phone"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <i class="bx bx-envelope"></i>
                                            <textarea
                                                name="message"
                                                class="form-control"
                                                id="message"
                                                cols="30"
                                                rows="8"
                                                required
                                                data-error="Write your message"
                                                placeholder="Your Message"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <button
                                            type="submit"
                                            class="default-btn default-bg-buttercup"
                                        >
                                            Send Message
                    <i class="bx bx-right-arrow-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default contact;