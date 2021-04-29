import React from 'react';
import Property1 from '../../assets/img/property/p-1.jpg';
function propertyArea(props) {
    return (
        <div>
            <div class="property-area pt-100 pb-70">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-5 ps-0">
                            <div class="property-img">
                                <a href="property-details.html">
                                    <img src={ Property1 } alt="Images" />
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="property-item">
                                <div class="section-title">
                                    <span>INHABITATION house</span>
                                    <h2>
                                        <a href="property-details.html">
                                            <b>DoveVivo</b>       is the largest co-living company
                     <b> in Europe</b>
                                        </a>
                                    </h2>
                                    <p>
                                        DoveVivo is the modern, entrepreneurial and efficient answer to the enormous demand for away from home accommodation.
                                        The group has been managing a portfolio of thousands of homes and residences in various Italian towns and cities since 2007 and has an imminent overseas expansion project. It offers owners a service for investment in, valorisation and management of property that maximises the value long-term, reducing risks and charges to the minimum. At the same time, it guarantees a professional, transparent and secure answer to the life requirements of the final customers, who form a community of thousands of students and young workers away from home.
                </p>
                                </div>
                                <div class="property-counter">
                                    <div class="row">
                                        <div class="col-lg-3 col-sm-6 col-md-3">
                                            <div class="counter-card counter-card-rs">
                                                <h2>152</h2>
                                                <h3>APARTMENTS</h3>
                                                <span>Sport City Center</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-sm-6 col-md-3">
                                            <div class="counter-card counter-card-rs">
                                                <h2>144</h2>
                                                <h3>HOUSES</h3>
                                                <span>Sport City Center</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-sm-6 col-md-3">
                                            <div class="counter-card counter-card-rs-2">
                                                <h2>45</h2>
                                                <h3>DELUX</h3>
                                                <span>Swimming Pool</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-sm-6 col-md-3">
                                            <div class="counter-card">
                                                <h2>31</h2>
                                                <h3>SEA VIEW</h3>
                                                <span>Garden</span>
                                            </div>
                                        </div>
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

export default propertyArea;