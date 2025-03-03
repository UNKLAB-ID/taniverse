import FacebookIcon from '../../assets/icons/iconst-facebook'
import FooterLogoIcon from '../../assets/icons/iconst-footer-logo'
import FooterIcon from '../../assets/icons/iconst-foter-secunder-logo'
import InstragamIcon from '../../assets/icons/iconst-instragram'
import LinkedinIcon from '../../assets/icons/iconst-linkedin'
import XIcon from '../../assets/icons/iconst-x'

const Footer = () => {
    return (
        <div className='bg-[var(--color-text-heading)] px-15  relative h-[550px] '>
            <FooterIcon className="absolute top-0 left-0" />
            <FooterIcon className="absolute bottom-0 right-0" />

            <div className="flex flex-col items-center justify-center h-full">
                <div className="grid grid-cols-2 gap-2 relative z-10 w-full">
                    <div className="">
                        <FooterLogoIcon />
                        <h1 className='text-[24px] font-bold text-[#fff] text-center my-5'>Get in Touch</h1>
                        <p className='text-[#fff] text-center'>We’re excited to hear from you. Send us your questions or <br /> feedback, and we’ll respond as soon as possible.</p>
                        <div className='bg-[#fff] w-120 m-auto mt-20 rounded-[88px] flex p-1'>
                            <input type="text" placeholder='Enter Your Email..' className='w-full h-[56px] border-none outline-none px-4 rounded-[88px]' />
                            <button className='bg-[var(--color-primary)] w-[200px] h-[56px] text-[#fff] font-semibold rounded-[88px]'>Subscribe</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between ">
                            <div>
                                <h1 className='text-[#fff] font-bold'>Guick Link</h1>
                                <ul className='mt-5'>
                                    <li className='text-[#fff] py-1'>Home</li>
                                    <li className='text-[#fff] py-1'>About Us</li>
                                    <li className='text-[#fff] py-1'>Our Value</li>
                                    <li className='text-[#fff] py-1'>Visi Misi</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-[#fff] font-bold'>Contact</h1>
                                <ul className='mt-5'>
                                    <li className='text-[#fff] py-1'>
                                        <a href="mailto:bajatechnology1@gmail.com" target="_blank" rel="noopener noreferrer">
                                            bajatechnology1@gmail.com
                                        </a>
                                    </li>
                                    <li className='text-[#fff] py-1'>
                                        <a href="https://wa.me/081908841990" target="_blank" rel="noopener noreferrer">
                                            081908841990
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-[#fff] font-bold'>Contact</h1>
                                <ul className='mt-5'>
                                    <li className='text-[#fff] py-1'>Privacy & Policy</li>
                                    <li className='text-[#fff] py-1'>Terms & Condition</li>
                                    <li className='text-[#fff] py-1'>Blog</li>
                                </ul>
                            </div>
                        </div>
                        <h3 className='text-[#fff] font-bold mt-5'>Address</h3>
                        <p className='text-[#fff] py-2'>Jalan Medan Merdeka Barat No. 9 · Jakarta Pusat 10110 · Jakarta, Indonesia</p>
                        <div className='flex gap-15 mt-5'>
                            <a href="https://www.linkedin.com/company/taniverse/" target="_blank" rel="noopener noreferrer">
                                <LinkedinIcon />
                            </a>
                            <a href="https://wa.me/081908841990" target="_blank" rel="noopener noreferrer">
                                <InstragamIcon />
                            </a>
                            <a href="https://wa.me/081908841990" target="_blank" rel="noopener noreferrer">
                                <XIcon />
                            </a>
                            <a href="https://wa.me/081908841990" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
