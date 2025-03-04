import LineIcon from "../../assets/icons/iconst-line";
import LogoSecunderIcon from "../../assets/icons/iconst-logo-secunder";
import imageAbout from "../../assets/images/image-about.svg";

const About = () => {
    return (
        <div className="px-6 md:px-12 py-30 max-w-[1280px] mx-auto">
            <div className="flex justify-between w-full items-center mb-5">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mr-2 whitespace-nowrap flex-shrink-0 min-w-fit">
                    About Us
                </h3>
                <LineIcon className="w-[100%] md:w-[80%] lg:w-[100%]" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
                {/* Mobile & Tablet: Gambar di atas */}
                <div className="flex lg:hidden justify-center">
                    <div
                        className=" h-72 w-full md:w-full md:h-50 rounded-[16px] flex items-center justify-center"
                        style={{ backgroundImage: `url(${imageAbout})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <LogoSecunderIcon className="w-16 md:w-20" />
                    </div>
                </div>

                {/* Bagian Teks */}
                <div className="col-span-2">
                    <div className="flex flex-col justify-center items-center lg:items-start h-auto lg:h-[460px]">
                        <div className="mt-6">
                            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-snug text-[var(--color-text-heading)] my-3">
                                Tani Verse
                            </h1>
                            <p className="text-justify font-normal text-base md:text-lg lg:text-xl leading-relaxed">
                                Tani Verse is a digital platform dedicated to
                                <span className="text-[var(--color-primary)]"> revolutionizing agriculture by connecting farmers to global markets and boosting productivity </span>
                                through advanced technologies like AI and IoT.
                                <span className="text-[var(--color-primary)]"> Our mission is to improve access to markets, enhance efficiency, and increase farmers' income. </span>
                                We provide integrated solutions, including real-time market data,
                                <span className="text-[var(--color-primary)]"> e-commerce, and AI-driven tools </span>
                                for pest detection and soil conditions, all aimed at optimizing farming practices. By leveraging digital innovation, Tani Pintar strives to create a more transparent, sustainable, and profitable agricultural ecosystem.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop: Gambar di kanan */}
                <div className="hidden lg:flex justify-center">
                    <div
                        className="w-[407px] h-[460px] rounded-[16px] p-20 flex items-center justify-center"
                        style={{ backgroundImage: `url(${imageAbout})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <LogoSecunderIcon className="w-24" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About