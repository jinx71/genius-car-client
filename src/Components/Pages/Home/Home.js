import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Header from '../../Shared/Header/Header';
import Services from '../../Shared/Services/Services';

const Home = () => {
    return (
        <div className='px-5'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;