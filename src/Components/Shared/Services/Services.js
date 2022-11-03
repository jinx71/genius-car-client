import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
// banner : https://ibb.co/dfGJnfm
const Services = () => {
    const services = useLoaderData();
    const handleClick = (id) => {
        console.log(id)
    }
    return (
        <div>
            <div className='w-1/2 mx-auto mb-12'>
                <h1 className='text-center text-xl text-primary font-bold'>Services</h1>
                <h1 className='text-center text-5xl font-bold mt-5'>Our Service Area</h1>
                <p className='text-center text-gray-500 capitalize mt-5'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service} handleClick={handleClick}></ServiceCard>)
                }
            </div>
            <div className='w-1/2 text-center mx-auto mb-12'>

                <Link className="btn btn-outline btn-primary">More Services</Link>
            </div>
        </div >
    );
};

export default Services;