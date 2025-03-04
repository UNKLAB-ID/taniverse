// src/components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import WebLogiIcon from '../assets/icons/web-logo';
import { useNavbarStore } from '../store/Navbar-store';
import NavbarMenuIcon from '../assets/icons/iconst-nav-line';
import CloseIcon from '../assets/icons/iconst-close';

const Navbar: React.FC = () => {
    const { setIsVisible } = useNavbarStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk drawer menu

    useEffect(() => {
        const contactSection = document.getElementById('contact');
        if (!contactSection) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(!entry.isIntersecting); // Hilang kalau "contact" terlihat
                });
            },
            { threshold: 0.5 } // 50% dari "contact" harus terlihat agar navbar menghilang
        );

        observer.observe(contactSection);

        return () => observer.disconnect();
    }, []);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            if (id === 'contact') {
                setIsVisible(false); // Langsung hilang saat klik "Contact"
            }
            setIsMenuOpen(false); // Tutup drawer menu saat klik link
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        // ${isVisible ? 'fixed z-50' : ''}
        <nav className={`w-full p-8 absolute max-w-[1280px] mx-auto`}>
            <div className='bg-white shadow-md h-[80px] px-8 rounded-[24px] flex justify-between items-center'>
                <WebLogiIcon />
                <ul className='hidden md:flex space-x-8 font-bold text-[var(--color-text-heading)]'>
                    <li><button onClick={() => handleScroll('about')}>About Us</button></li>
                    <li><button onClick={() => handleScroll('our-value')}>Our Value</button></li>
                    <li><button onClick={() => handleScroll('visi-misi')}>Visi Misi</button></li>
                    <li><button onClick={() => handleScroll('contact')}>Contact</button></li>
                    {/* Tambahkan link lainnya sesuai kebutuhan */}
                </ul>

                {/* Mobile & Tablet Menu Button */}
                <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                    <NavbarMenuIcon />
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-opacity-50 flex justify-end z-50">
                    <div className="w-3/4 bg-white h-full p-6 shadow-lg">
                        {/* Tombol Close */}
                        <button className="mb-6" onClick={() => setIsMenuOpen(false)}>
                            <CloseIcon />
                        </button>

                        {/* Mobile Menu List */}
                        <ul className="flex flex-col space-y-4 font-bold text-[var(--color-text-heading)]">
                            <li><button onClick={() => handleScroll('about')}>About Us</button></li>
                            <li><button onClick={() => handleScroll('our-value')}>Our Value</button></li>
                            <li><button onClick={() => handleScroll('visi-misi')}>Visi Misi</button></li>
                            <li><button onClick={() => handleScroll('contact')}>Contact</button></li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    )
};

export default Navbar;
