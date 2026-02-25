import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-gradient-to-r from-red-950 via-red-900 to-red-800 sm:footer-horizontal text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <div className='flex gap-3'>
    <FaFacebook size={32} className='text-blue-600'></FaFacebook>
    <FaInstagram size={32} className='text-pink-500'></FaInstagram>
    <FaTwitter size={32} className='text-blue-400'></FaTwitter>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;