import React, { useState } from 'react';
import icon from "../../../Assets/icons/check.svg";
const FeatureCard = ({ feature, hover, handleHover, handleLeave }) => {
    const { id, active, img, featureTitle } = feature;
    return (
        <div className={active ? "card shadow-xl border border-gray-200 bg-primary text-white hover:bg-primary hover:text-white filter-green " : "card shadow-xl border border-gray-200 hover:bg-primary hover:text-white filter-green "} >
            <div className='rounded rounded-lg '>
                <figure className="p-5">
                    <img src={img} alt="Shoes" className="rounded-xl w-12 h-12 icon" />
                </figure>


                {/* <svg viewBox="0 0 32 32" >
                    <use href={`${img}`}></use>
                </svg> */}

            </div>
            <div className="card-body p-2">
                <h2 className="font-bold text-lg text-center mb-2">{featureTitle}</h2>
            </div>
        </div>
    );
};

export default FeatureCard;