import LogoSecunderIcon from '../../assets/icons/iconst-logo-secunder';
import backgroundImage from '../../assets/images/bg-oboardig.svg';

const Onboarding = () => {
    return (
        <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="bg-cover bg-center h-[820px] w-[100%] flex flex-col justify-center items-center text-center px-6"
        >
            <h1 className="font-bold text-7xl leading-[108px] text-center text-[var(--color-text-heading)] mt-26">
                <span className='text-[var(--color-primary)]'>Growing</span> a Better
                <span className='text-[var(--color-primary)]'>Future</span> with <br /> Cutting-Edge Agricultural
                <span className='text-[var(--color-primary)]'> Solutions</span>
            </h1>
            <p className='text-center text-[var(--color-text)] font-normal text-[24px] mt-5'>
                We’re transforming agriculture with AI-driven solutions that enhance productivity and <br />
                sustainability, helping farmers optimize resources and improve crop yields for a greener future.
            </p>
            <button className='border border-amber-50 w-[320px] h-[56px] text-[#fff] font-semibold rounded-full mt-28'>Get Service</button>
            <LogoSecunderIcon className='mt-8' />
        </div>
    );
};

export default Onboarding;
