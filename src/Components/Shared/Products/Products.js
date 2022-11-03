import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

// banner : https://ibb.co/dfGJnfm
const Products = () => {

    const handleClick = (id) => {
        console.log(id)
    }
    const products = [
        {
            image: 'https://i.ibb.co/4f1xCnB/6.png',
            name: 'Car Engine Plug',
            price: '$20.00',
            rating: 4.5
        },
        {
            image: 'https://i.ibb.co/hBQNvXs/5.png',
            name: 'Car Air Filter',
            price: '$20.00',
            rating: 4.5
        },
        {
            image: 'https://i.ibb.co/NjmcP3R/3.png',
            name: 'Cools Led Light',
            price: '$20.00',
            rating: 4.5
        },
        {
            image: 'https://i.ibb.co/h8Tz6yM/4.png',
            name: 'Cools Led Light',
            price: '$20.00',
            rating: 4.5
        },
        {
            image: 'https://i.ibb.co/Yh83J8X/1.png',
            name: 'Cools Led Light',
            price: '$20.00',
            rating: 4.5
        },
        {
            image: 'https://i.ibb.co/28sgSX0/2.png',
            name: 'Cools Led Light',
            price: '$20.00',
            rating: 4.5
        },
    ]
    return (
        <div>
            <div className='w-1/2 mx-auto mb-12'>
                <h1 className='text-center text-xl text-primary font-bold'>Popular Products</h1>
                <h1 className='text-center text-5xl font-bold mt-5'>Browse Our Products</h1>
                <p className='text-center text-gray-500 capitalize mt-5'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                {
                    products.map((product, idx) => <ProductCard key={idx} product={product} handleClick={handleClick}></ProductCard>)
                }
            </div>
            <div className='w-1/2 text-center mx-auto mb-12'>

                <Link className="btn btn-outline btn-primary">More Products</Link>
            </div>
        </div >
    );
};

export default Products;