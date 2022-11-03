import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Slides = ({ slideData }) => {
    const { id, prev, next, image } = slideData;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='absolute slideGradient'></div>
            <img src={image} alt="" className="slideImage" />
            <div className="absolute flex justify-start transform -translate-y-1/2 left-20 right-10 top-1/3">
                <h1 className="bannerHeading text-white font-bold ">Affordable <br></br> Price For Car <br></br> Servicing</h1>
                {/* <a href={`#slide${next}`} className="btn btn-circle hover:btn-primary">❯</a> */}
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-20 right-10 top-[60%]">
                <p className='text-white'>There are many variations of passages of  available, but <br></br> the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-20 right-10 top-[75%]">
                <Link className="btn mr-10 btn-primary">Discover More</Link>
                <Link className="btn btn-outline btn-primary">Latest Projects</Link>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle hover:btn-primary mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle hover:btn-primary">❯</a>
            </div>
        </div>
    );
};

export default Slides;