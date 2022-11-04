import React from 'react';
import About from '../../Shared/About/About';
import Banner from '../../Shared/Banner/Banner';
import ContactInfo from '../../Shared/ContactInfo/ContactInfo';
import Features from '../../Shared/Features/Features';
import Header from '../../Shared/Header/Header';
import Products from '../../Shared/Products/Products';
import Services from '../../Shared/Services/Services';
import Team from '../../Shared/Team/Team';
import Testimonial from '../../Shared/Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='px-5'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactInfo></ContactInfo>
            <Products></Products>
            <Team></Team>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;