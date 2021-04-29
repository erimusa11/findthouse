import NavbarArea from "./navbarArea/navbarArea";
import HomeSlider from "./homeSlider/homeSlider";
import ServiceArea from './serviceArea/serviceArea';
import PropertyArea from './propertyArea/propertyArea';
import PropertyArea2 from './propertyArea/propertyArea2';
import CicleInfo from './circleInfo/cicleInfo';
import CategoryDisplay from "./categoryDisplay/categoryDisplay";
import Inovation from './inovation/inovation';
import Contact from './contact/contact';
import Faward from "./faward/faward";
import Footer from "./footer/footer";


import React from 'react';

function Home() {

    let logo = " https://cdn.dovevivo.it//images/Homepage/logo-dovevivo.svg";
    return (

        <div>
            {/* this is the top navbar */ }
            <NavbarArea logoimg={ logo } ></NavbarArea>
            {/* this is the home slider  */ }
            <HomeSlider></HomeSlider>
            {/* this is the  cart of service area */ }
            <ServiceArea></ServiceArea>
            {/* this is the perperty cart  */ }
            <PropertyArea></PropertyArea>
            {/* this is the property  area 2 */ }
            <PropertyArea2></PropertyArea2>
            {/* this ith the cicle infor */ }
            <CicleInfo></CicleInfo>
            {/* This is the display category  */ }
            <CategoryDisplay></CategoryDisplay>
            {/* inovation part */ }
            <Inovation></Inovation>
            {/* this is the contact from */ }
            <Contact></Contact>
            {/* this is the faqard area  */ }
            <Faward ></Faward>
            {/* this is the footer */ }
            <Footer logoimg={ logo }></Footer>
        </div>

    )

}

export default Home;
