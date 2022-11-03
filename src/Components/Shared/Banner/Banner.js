import React from 'react';
import slideImage1 from '../../../Assets/images/banner/1.jpg';
import slideImage2 from '../../../Assets/images/banner/2.jpg';
import slideImage3 from '../../../Assets/images/banner/3.jpg';
import slideImage4 from '../../../Assets/images/banner/4.jpg';
import slideImage5 from '../../../Assets/images/banner/5.jpg';
import slideImage6 from '../../../Assets/images/banner/6.jpg';
import Slides from './Slides';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    const bannerData = [
        {
            id: 1,
            previous: 6,
            next: 2,
            image: slideImage1,
        },
        {
            id: 2,
            previous: 1,
            next: 3,
            image: slideImage2,
        },
        {
            id: 3,
            previous: 2,
            next: 4,
            image: slideImage3,
        },
        {
            id: 4,
            previous: 3,
            next: 5,
            image: slideImage4,
        },
        {
            id: 5,
            previous: 4,
            next: 6,
            image: slideImage5,
        },
        {
            id: 6,
            previous: 5,
            next: 1,
            image: slideImage6,
        },

    ]
    return (
        <>
            <div className="carousel w-full hidden sm:flex my-10 px-10 lg:px-0 ">
                {bannerData.map(data => <Slides key={data.id} slideData={data}></Slides>)}
            </div>
            <div className='relative block sm:hidden w-full my-5'>
                <div className='absolute gradient'></div>
                <div className='absolute flex justify-center transform -translate-y-1/2 left-7 right-7 top-[25%]'>
                    <h1 className="text-3xl text-center font-bold text-white">Affordable Price For Car Servicing</h1>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-7 right-7 top-[60%]">
                    <p className='text-center text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-7 right-7 top-[90%]">
                    <Link className="btn btn-xs mr-5 btn-primary">Discover More</Link>
                    <Link className="btn btn-xs btn-outline btn-primary">Latest Projects</Link>
                </div>
                <img src={slideImage2} alt="" className='smallBannerImage' />

            </div>
        </>
    );
};

export default Banner;