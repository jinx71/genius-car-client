import React, { useState } from 'react';
import f1 from '../../../Assets/icons/group.svg';
import f2 from '../../../Assets/icons/Group 38729.svg';
import f3 from '../../../Assets/icons/person.svg';
import f4 from '../../../Assets/icons/Wrench.svg';
import f5 from '../../../Assets/icons/check.svg';
import f6 from '../../../Assets/icons/deliveryt.svg';
import FeaturesCard from './FeaturesCard';
import './features.css'
import Check from '../../../Assets/icons/Check';
import Delivery from '../../../Assets/icons/Delivery';
const Features = () => {

    const featureData = [
        {
            id: 1,
            img: f1,
            featureTitle: "Expert Team",
            active: false,

        },
        {
            id: 2,
            img: f2,
            featureTitle: "Timely Delivery",
            active: true,
        },
        {
            id: 3,
            img: f3,
            featureTitle: "24/7 Support",
            active: false,

        },
        {
            id: 4,
            img: f4,
            featureTitle: "Best Equipment",
            active: false,
        },
        {
            id: 5,
            img: f5,
            featureTitle: "100% Guranty",
            active: false,

        },
        {
            id: 6,
            img: f6,
            featureTitle: "Timely Delivery",
            active: false,
        },

    ]
    return (
        <div>
            <div className='w-1/2 mx-auto mb-12'>
                <h1 className='text-center text-xl text-primary font-bold'>Core Features</h1>
                <h1 className='text-center text-5xl font-bold mt-5'>Why Choose Us</h1>
                <p className='text-center text-gray-500 capitalize mt-5'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-1 mb-12'>
                {
                    featureData.map((feature) => <FeaturesCard key={feature.id} feature={feature}></FeaturesCard>)
                }
            </div>

        </div >
    );
};

export default Features;