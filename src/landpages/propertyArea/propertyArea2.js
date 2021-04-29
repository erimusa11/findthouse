import React from 'react';
import coolImg from '../../assets/img/property/plus-dots.png';
import Property1 from '../../assets/img/property/1.jpg';
import Property2 from '../../assets/img/property/2.jpg';
import Property3 from '../../assets/img/property/3.jpg';
function propertyArea2(props) {
    return (
        <div>
            <section class="property-section pb-70">
                <div class="container-fluid">
                    <div class="container-max">
                        <div class="property-section-text">
                            <div class="section-title">
                                <span>The areas</span>
                                <h2>
                                    The Area Of Property
                <b>Get It Know</b>
                                </h2>
                            </div>
                        </div>
                        <div class="row pt-45">
                            <div class="col-lg-4 col-md-6">
                                <div class="single-property">
                                    <div class="images">
                                        <a href="project-details.html">
                                            <img src={ Property1 } alt="Images" />
                                        </a>
                                        <div class="property-content">
                                            <span>DISCOVER NOW</span>
                                            <a href="project-details.html">
                                                <h3>Madrid</h3>
                                            </a>
                                            <p>
                                                One of the most attractive cities in Europe and a favourite destination for students and workers. With its 21 districts, totalling 128 barrios, it's rich in history and full of attractions to discover.
                    </p>
                                            <a href="project-details.html" class="learn-more-btn">
                                                <i class="bx bx-right-arrow-alt"></i>
                      Learn More
                    </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="single-property">
                                    <div class="images">
                                        <a href="project-details.html">
                                            <img src={ Property2 } alt="Images" />
                                        </a>
                                        <div class="property-content">
                                            <span>DISCOVER NOW</span>
                                            <a href="project-details.html">
                                                <h3>PARIS</h3>
                                            </a>
                                            <p>
                                                A world centre of art, fashion, gastronomy and culture, Paris is one of the most important cities in Europe, attracting a large number of students and workers and offering them a wealth of opportunitie
                    </p>
                                            <a href="project-details.html" class="learn-more-btn">
                                                <i class="bx bx-right-arrow-alt"></i>
                      Learn More
                    </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                <div class="single-property">
                                    <div class="images">
                                        <a href="project-details.html">
                                            <img src={ Property3 } alt="Images" />
                                        </a>
                                        <div class="property-content">
                                            <span>DISCOVER NOW</span>
                                            <a href="project-details.html">
                                                <h3>MILAN</h3>
                                            </a>
                                            <p>
                                                The most European of Italian cities; efficient, frenetic, orderly, well-to-do. A world of opportunity with an open, young and lively heart. A fun and eclectic city waiting to be discovered.
                    </p>
                                            <a href="project-details.html" class="learn-more-btn">
                                                <i class="bx bx-right-arrow-alt"></i>
                      Learn More
                    </a>
                                            <div class="plus-dots">
                                                <img
                                                    src={ coolImg }
                                                    alt="Images"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default propertyArea2;