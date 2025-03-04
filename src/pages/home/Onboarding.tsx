import LogoSecunderIcon from '../../assets/icons/iconst-logo-secunder';
import backgroundImage from '../../assets/images/bg-oboardig.svg';

const Onboarding = () => {
    return (
        <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="bg-cover bg-center min-h-screen w-full flex flex-col justify-center items-center text-center px-6 py-16"
        >
            <div className="container mx-auto max-w-[1200px]">
                <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-[80px] lg:leading-[100px] text-[var(--color-text-heading)] mt-[80px] md:mt-[100px]">
                    <span className="text-[var(--color-primary)]">Growing</span> a Better
                    <span className="text-[var(--color-primary)]"> Future</span> with <br className="hidden md:block" /> Cutting-Edge Agricultural
                    <span className="text-[var(--color-primary)]"> Solutions</span>
                </h1>

                <p className="text-[var(--color-text)] font-normal text-base md:text-lg lg:text-xl mt-4 md:mt-6 max-w-[900px] mx-auto">
                    We’re transforming agriculture with AI-driven solutions that enhance productivity and sustainability,
                    helping farmers optimize resources and improve crop yields for a greener future.
                </p>

                <button className="border border-amber-50 w-52 md:w-64 h-12 md:h-14 text-white font-semibold rounded-full mt-12 md:mt-16">
                    Get Service
                </button>

                <LogoSecunderIcon className="mt-6 md:mt-8 w-16 md:w-20 mx-auto" />
            </div>
        </div>
    );
};

export default Onboarding;
