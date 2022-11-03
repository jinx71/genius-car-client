import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
const ProductCard = ({ product, handleClick }) => {
    console.log(product)
    const { rating, name, image, price } = product;
    console.log(image)
    return (
        <div className="card shadow-xl border border-gray-200">
            <figure className="px-5 pt-5">
                <img src={image} alt="Shoes" className="rounded-xl h-56" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{name}</h2>

                <div className="card-actions justify-end items-center">
                    <p className='text-2xl font-bold text-primary'>{rating}</p>
                    <p className='text-2xl font-bold text-primary'>{price}</p>
                    <button className="text-primary text-5xl" onClick={() => handleClick(name)}><BsArrowRightShort></BsArrowRightShort></button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;