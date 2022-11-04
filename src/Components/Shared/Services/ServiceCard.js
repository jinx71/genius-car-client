import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
const ServiceCard = ({ service, handleClick }) => {
    // console.log(service)
    const { _id, serviceName, image, price } = service;
    // console.log(image)
    return (
        <div className="card shadow-xl border border-gray-200">
            <figure className="px-5 pt-5">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{serviceName}</h2>

                <div className="card-actions justify-end items-center">
                    <p className='text-2xl font-bold text-primary'>{price}</p>
                    <button className="text-primary text-5xl" onClick={() => handleClick(_id)}><BsArrowRightShort></BsArrowRightShort></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;