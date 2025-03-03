import LineIcon from "../../assets/icons/iconst-line";
import LogoSecunderIcon from "../../assets/icons/iconst-logo-secunder";
import imageAbout from "../../assets/images/image-about.svg";

const About = () => {
    return (
        <div className="grid grid-cols-3 gap-4 px-15 py-30">
            <div className="col-span-2">
                <div className="flex flex-col justify-center items-center h-[460px]">
                    <div className="flex justify-between w-full items-center">
                        <h3 className="text-[24px] mr-1" >About Us</h3>
                        <LineIcon className="w-[660px]" />
                    </div>
                    <div>
                        <h1 className="font-bold text-[36px] leading-[48px] text-[var(--color-text-heading)] my-5">Tani Verse</h1>
                        <p className=" text-justify font-normal text-[24px]">
                            Tani Verse is a digital platform dedicated to
                            <span className="text-[var(--color-primary)]"> revolutionizing agriculture by connecting farmers to global markets and boosting productivity </span>
                            through advanced technologies like AI and IoT.
                            <span className="text-[var(--color-primary)]">Our mission is to improve access to markets, enhance efficiency, and increase farmers' income. </span>
                            We provide integrated solutions, including real-time market data,
                            <span className="text-[var(--color-primary)]">e-commerce, and AI-driven tools </span>
                            for pest detection and soil conditions, all aimed at optimizing farming practices. By leveraging digital innovation, Tani Pintar strives to create a more transparent, sustainable, and profitable agricultural ecosystem.
                        </p>
                    </div>
                </div>
            </div>
            <div >
                <div className="w-[407px] h-[460px] rounded-[16px] p-20" style={{ backgroundImage: `url(${imageAbout})` }}>
                    <LogoSecunderIcon className="m-auto" />
                </div>
            </div>
        </div>
    )
}

export default About