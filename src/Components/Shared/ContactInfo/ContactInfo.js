import React from 'react';
import contactIconOne from '../../../Assets/icons/Group 32.png';
import contactIconTwo from '../../../Assets/icons/Group 34.png';
import contactIconThree from '../../../Assets/icons/Group 35.png';

const ContactInfo = () => {
    return (
        <div className='bg-black mb-24 mt-32 rounded-lg px-10 py-24 grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='flex items-center'>
                <img src={contactIconOne} alt="" className='w-10 h-10' srcset="" />
                <div className=''>
                    <h1 className='text-white text-lg ml-5'>We are open monday-friday</h1>
                    <h1 className='text-white font-bold text-2xl ml-5'>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='flex items-center'>
                <img src={contactIconTwo} alt="" className='w-10 h-10' srcset="" />
                <div className=''>
                    <h1 className='text-white text-lg ml-5'>Have a question?</h1>
                    <h1 className='text-white font-bold text-2xl ml-5'>+2546 251 2658</h1>
                </div>
            </div>
            <div className='flex items-center'>
                <img src={contactIconThree} alt="" className='w-10 h-10' srcset="" />
                <div className=''>
                    <h1 className='text-white text-lg ml-5'>Need a repair? our address</h1>
                    <h1 className='text-white font-bold text-2xl ml-5'>Liza Street, New York</h1>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;