import React from 'react';
import { BsArrowRightShort, BsStarFill, BsStarHalf } from 'react-icons/bs';
const ProductCard = ({ product, handleClick }) => {
    console.log(product)
    const { rating, name, image, price } = product;

    console.log(image)
    return (
        <div className="card shadow-xl border border-gray-200">
            <div className='bg-gray-100 rounded rounded-lg m-5 py-10'>
                <figure className="px-5 pt-5">
                    <img src={image} alt="Shoes" className="rounded-xl w-32 h-32" />
                </figure>
            </div>
            <div className="card-body">
                <p className='text-2xl font-bold text-primary text-center flex justify-center gap-2 mb-5'>

                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarHalf></BsStarHalf>

                </p>
                <h2 className="font-bold text-2xl text-center mb-2">{name}</h2>

                <div className="card-actions flex-col justify-end items-center">

                    <p className='text-2xl font-bold text-primary'>{price}</p>
                    {/* <button className="text-primary text-5xl" onClick={() => handleClick(name)}><BsArrowRightShort></BsArrowRightShort></button> */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;