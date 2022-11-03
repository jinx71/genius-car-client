import React from 'react';
import About from '../../Shared/About/About';
import Banner from '../../Shared/Banner/Banner';
import Header from '../../Shared/Header/Header';
import Services from '../../Shared/Services/Services';

const Home = () => {
    return (
        <div className='px-5'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;