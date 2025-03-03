// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import WebLogiIcon from '../assets/icons/web-logo';

const Navbar: React.FC = () => (
    <nav className='w-full p-8 absolute'>
        <div className='bg-white shadow-md h-[80px] px-8 rounded-[24px] flex justify-between items-center'>
            <WebLogiIcon />
            <ul className='flex space-x-8 font-bold text-[var(--color-text-heading)]'>
                <li><Link to="/">About US</Link></li>
                <li><Link to="/">Our Value</Link></li>
                <li><Link to="/">Visi Misi</Link></li>
                <li><Link to="/">Contact</Link></li>
                {/* Tambahkan link lainnya sesuai kebutuhan */}
            </ul>
        </div>
    </nav>
);

export default Navbar;
