import React from 'react';
import person from '../../../Assets/images/about_us/person.jpg';
import parts from '../../../Assets/images/about_us/parts.jpg';
import './About.css';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="hero mb-48 mt-32">
            <div className="hero-content p-0 flex-col lg:flex-row justify-start items-start">
                <div className='w-1/2 relative'>
                    <img src={person} alt="" className="aboutPerson rounded-lg" />
                    <img src={parts} alt="" className="aboutParts rounded-lg absolute top-56 -right-0 border border-[12px] border-white" />
                </div>
                <div className='w-1/2 flex flex-col '>
                    <h1 className='text-xl text-primary font-bold'>About Us</h1>
                    <h1 className='text-5xl font-bold mt-10'>We are qualified <br></br> & of experience <br></br> in this field</h1>
                    <p className=' text-gray-500 capitalize mt-10'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className=' text-gray-500 capitalize mt-10'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <Link className="btn btn-lg btn-primary mt-5 text-white w-1/2">Get More Info</Link>
                </div>
            </div>
        </div>
    );
};

export default About;