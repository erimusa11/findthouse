import React, { useState } from 'react';
import RoomDetails1 from '../../assets/img/room-details/1.jpg';
import RoomDetails2 from '../../assets/img/room-details/2.jpg';
import RoomDetails3 from '../../assets/img/room-details/3.jpg';
const CategoryDisplay = (props) => {
    //aktive the slider on the moment of click
    const [list, setlist] = useState(0);
    const changeslide = (value) => {

        setlist(value);

    }


    return (
        <div>
            <div class="room-details-area pb-70">
                <div class="container-fluid">
                    <div class="container-max">
                        <div class="section-title text-center">
                            <span>ROOM DETAILS</span>
                            <h2 class="margin-auto">Real Value is<b> Inside</b></h2>
                        </div>
                        <div class="tab room-details-tab">
                            <ul class="tabs">
                                <li class={ list == 1 ? 'current' : ' ' } >
                                    <a onClick={ () => changeslide(1) } href="javascript:void(0);">01. FLOORS</a>
                                </li>
                                <li class={ list == 2 ? 'current' : ' ' }>
                                    <a onClick={ () => changeslide(2) } href="javascript:void(0);">02. WINDOWS</a>
                                </li>
                                <li class={ list == 3 ? 'current' : ' ' } >
                                    <a onClick={ () => changeslide(3) } href="javascript:void(0);">03. WALLS</a>
                                </li>
                                <li class={ list == 4 ? 'current' : ' ' } >
                                    <a onClick={ () => changeslide(4) } href="javascript:void(0);">04. KITCHEN FAUCET</a>
                                </li>
                                <li class={ list == 5 ? 'current' : ' ' } >
                                    <a onClick={ () => changeslide(5) } href="javascript:void(0);">05. KITCHEN APPLIANCES</a>
                                </li>
                            </ul>
                            <div class="tab_content current active pt-45">
                                <div class="tabs_item current" style={ list == 1 ? { display: "block" } : { display: "none" } }>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6">
                                            <div class="room-details-card">
                                                <a href="property-details.html">
                                                    <img src={ RoomDetails3 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="property-details.html"
                                                    ><h3>01. FLOORS DETAILS</h3></a
                                                    >
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="room-details-card">
                                                <a href="property-details.html">
                                                    <img src={ RoomDetails2 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="property-details.html"
                                                    ><h3>01. FLOORS DETAILS</h3></a
                                                    >
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                            <div class="room-details-card">
                                                <a href="property-details.html">
                                                    <img src={ RoomDetails1 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="#"
                                                    ><h3>01. FLOORS DETAILS</h3></a
                                                    >
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabs_item" style={ list == 2 ? { display: "block" } : { display: "none" } }>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6">
                                            <div class="room-details-card">
                                                <a href="property-details.html">
                                                    <img src={ RoomDetails2 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="#"><h3>02. WINDOWS</h3></a>
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="room-details-card">
                                                <a href="property-details.html">
                                                    <img src={ RoomDetails3 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="#"><h3>02. WINDOWS</h3></a>
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                            <div class="room-details-card">
                                                <a href="property-details.html">
                                                    <img src={ RoomDetails1 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="#"><h3>02. WINDOWS</h3></a>
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabs_item" style={ list == 3 ? { display: "block" } : { display: "none" } }  >
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6">
                                            <div class="room-details-card">
                                                <a href="#">
                                                    <img src={ RoomDetails3 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="property-details.html"><h3>03. WALLS</h3></a>
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="room-details-card">
                                                <a href="property-details.html">
                                                    <img src={ RoomDetails1 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="#"><h3>03. WALLS</h3></a>
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                            <div class="room-details-card">
                                                <a href="property-details.html">
                                                    <img src={ RoomDetails2 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="#"><h3>03. WALLS</h3></a>
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabs_item" style={ list == 4 ? { display: "block" } : { display: "none" } } >
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6">
                                            <div class="room-details-card">
                                                <a href="property-details.html">
                                                    <img src={ RoomDetails1 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="#"
                                                    ><h3>04. KITCHEN FAUCET</h3></a
                                                    >
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="room-details-card">
                                                <a href="property-details.html">
                                                    <img src={ RoomDetails3 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="#"
                                                    ><h3>04. KITCHEN FAUCET</h3></a
                                                    >
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                            <div class="room-details-card">
                                                <a href="property-details.html">
                                                    <img src={ RoomDetails2 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="#"
                                                    ><h3>04. KITCHEN FAUCET</h3></a
                                                    >
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabs_item" style={ list == 5 ? { display: "block" } : { display: "none" } } >
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6">
                                            <div class="room-details-card">
                                                <a href="#">
                                                    <img src={ RoomDetails1 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="#"
                                                    ><h3>05. KITCHEN APPLIANCES</h3></a
                                                    >
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="room-details-card">
                                                <a href="property-details.html">
                                                    <img src={ RoomDetails2 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="#"
                                                    ><h3>05. KITCHEN APPLIANCES</h3></a
                                                    >
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                            <div class="room-details-card">
                                                <a href="property-details.html">
                                                    <img src={ RoomDetails3 } alt="Images" />
                                                </a>
                                                <div class="content">
                                                    <a href="#"
                                                    ><h3>05. KITCHEN APPLIANCES</h3></a
                                                    >
                                                    <p>
                                                        Lorem ipsum dolor sit ame consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliquaUt enim ad minim veniaquis
                        </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </div >
    );
}

export default CategoryDisplay;