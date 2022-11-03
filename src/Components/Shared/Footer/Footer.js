import React from 'react';
import logo from '../../../Assets/logo.svg'
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer w-full p-10 bg-gray-900 text-white">
            <div>
                <img src={logo} alt="" />
                <p>Edwin Diaz is a software and web <br />technologies engineer, a life coach <br />trainer who is also a serial .</p>
                <div className='flex justify-start items-center'>
                    <span className='bg-gray-700 p-2 mr-2 rounded-full hover:bg-gray-600 cursor-pointer'>< FaGoogle /></span>
                    <span className='bg-gray-700 p-2 mr-2 rounded-full hover:bg-gray-600 cursor-pointer'>< FaTwitter /></span>
                    <span className='bg-gray-700 p-2 mr-2 rounded-full hover:bg-gray-600 cursor-pointer'>< FaInstagram /></span>
                    <span className='bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer'>< FaLinkedin /></span>
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;