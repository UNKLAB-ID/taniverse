import { useState } from 'react'
import FacebookIcon from '../../assets/icons/iconst-facebook'
import FooterLogoIcon from '../../assets/icons/iconst-footer-logo'
import FooterIcon from '../../assets/icons/iconst-foter-secunder-logo'
import InstragamIcon from '../../assets/icons/iconst-instragram'
import LinkedinIcon from '../../assets/icons/iconst-linkedin'
import TiktokIcon from '../../assets/icons/iconst-tiktok'

const Footer = () => {
    const [message, setMessage] = useState('');
    const linkedin = import.meta.env.VITE_LINKEDIN;
    const instagram = import.meta.env.VITE_INSTAGRAM;
    const whatsapp = import.meta.env.VITE_WHATSAPP;
    const facebook = import.meta.env.VITE_FACEBOOK;
    const tiktok = import.meta.env.VITE_TIKTOK;
    const phone = import.meta.env.VITE_PHONE;

    const handleChange = () => {
        const email = import.meta.env.VITE_EMAIL;
        const subject = "Pesan dari Website";
        const body = encodeURIComponent(message);

        // Redirect ke email
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-[var(--color-text-heading)] px-6 md:px-12 lg:px-20 py-10 relative'>
            <FooterIcon className="absolute top-0 left-0 hidden md:block" />
            <FooterIcon className="absolute bottom-0 right-0 hidden md:block" />

            <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 w-full text-center md:text-left">
                    <div>
                        <FooterLogoIcon className="mx-auto md:mx-0" />
                        <h1 className='text-[24px] font-bold text-white my-5'>Get in Touch</h1>
                        <p className='text-white'>We’re excited to hear from you. Send us your questions or feedback, and we’ll respond as soon as possible.</p>
                        <div className='bg-white w-full md:w-3/4 lg:w-1/2 m-auto md:m-0 mt-6 rounded-full flex p-1'>
                            <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Enter Your Email..' className='w-full h-12 border-none outline-none px-4 rounded-full' />
                            <button onClick={handleChange} className='bg-[var(--color-primary)] w-32 h-12 text-white font-semibold rounded-full'>Subscribe</button>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-6 md:flex md:justify-between">
                            <div>
                                <h1 className='text-white font-bold'>Quick Links</h1>
                                <ul className='mt-4'>
                                    <li className='text-white py-1'><button onClick={() => handleScroll('onbording')}>Home</button></li>
                                    <li className='text-white py-1'><button onClick={() => handleScroll('about')}>About Us</button></li>
                                    <li className='text-white py-1'><button onClick={() => handleScroll('our-value')}>Our Value</button></li>
                                    <li className='text-white py-1'><button onClick={() => handleScroll('visi-misi')}>Visi Misi</button></li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-white font-bold'>Contact</h1>
                                <ul className='mt-4'>
                                    <li className='text-white py-1'><a href={`mailto:${import.meta.env.VITE_EMAIL}`}>{import.meta.env.VITE_EMAIL}</a></li>
                                    <li className='text-white py-1'><a href={whatsapp} target="_blank" rel="noopener noreferrer">{phone}</a></li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-white font-bold'>Information</h1>
                                <ul className='mt-4'>
                                    <li className='text-white py-1'>Privacy & Policy</li>
                                    <li className='text-white py-1'>Terms & Conditions</li>
                                    <li className='text-white py-1'>Blog</li>
                                </ul>
                            </div>
                        </div>
                        <h3 className='text-white font-bold mt-6'>Address</h3>
                        <p className='text-white py-2'>Jalan Medan Merdeka Barat No. 9, Jakarta Pusat 10110, Jakarta, Indonesia</p>
                        <div className='flex justify-center md:justify-start gap-4 mt-4'>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
                            <a href={instagram} target="_blank" rel="noopener noreferrer"><InstragamIcon /></a>
                            <a href={tiktok} target="_blank" rel="noopener noreferrer"><TiktokIcon /></a>
                            <a href={facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
