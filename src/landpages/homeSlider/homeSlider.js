import React from 'react';
import Home1 from '../../assets/img/home1/1.jpg';


function homeSlider(props) {
    return (
        <div>
            <div class="home-slider-area">
                <div class="container-fluid m-0 p-0">
                    <div class="home-slider owl-carousel owl-theme">
                        <div class="slider-item">
                            <div class="row align-items-center">
                                <div class="col-lg-5 col-xxl-6">
                                    <div class="home-slider-content">
                                        <span>New rooms for rent in <b>Madrid</b></span>
                                        <h1><b>San Lorenzo</b> 11  unique offer and  <b>Fantastic Location </b>
                                        </h1>
                                        <p>
                                            Salut! We have landed in Paris

                  </p>
                                        <div class="home-slider-btn">
                                            <a href="#" class="default-btn">
                                                Find your ideal room
                      <i class="bx bx-right-arrow-alt"></i>
                                            </a>
                                            <a href="#" class="default-btn active">
                                                Virtual Tour
                      <i class="bx bx-right-arrow-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-7 col-xxl-6 pr-0">
                                    <div class="home-slider-img">
                                        <img src={ Home1 } alt="Images" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default homeSlider;