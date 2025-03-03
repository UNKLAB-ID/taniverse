import About from "../../pages/home/About";
import Digitalisation from "../../pages/home/Digitalisation";
import Footer from "../../pages/home/Footer";
import Onboarding from "../../pages/home/Onboarding";
import OurValue from "../../pages/home/OurValues";
import VisiMisi from "../../pages/home/VisiMisi";

const Home = () => {
    return (
        <div>
            <Onboarding />
            <About />
            <Digitalisation />
            <OurValue />
            <VisiMisi />
            <Footer />
            <div className='bg-[var(--color-text-heading)] pb-5'>
                <p className='text-[#fff] text-center'>Copyright 2025, Taniverse All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Home;