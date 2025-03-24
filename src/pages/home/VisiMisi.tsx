import imageVisi from "../../assets/images/visi.svg";
import imageMisi from "../../assets/images/image-ai.svg"
import LogoSecunderIcon from "../../assets/icons/iconst-logo-secunder";
import LineIcon from "../../assets/icons/iconst-line";
import AiIcon from "../../assets/icons/iconst-ai";

const VisiMisi: React.FC = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-15">
            <div className="flex justify-between items-center mb-5 w-full">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold flex-shrink-0 min-w-fit mr-2">
                    Visi Misi
                </h3>
                <LineIcon className="w-full md:w-4/5 lg:w-full" />
            </div>

            {/* Visi */}
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 items-center">
                {/* Mobile & Tablet: Gambar di atas */}
                <div className="lg:hidden w-full">
                    <div className="relative rounded-xl h-[250px] md:h-[300px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#4FD046] to-transparent bg-opacity-50 h-[100px] rounded-t-xl"></div>
                        <img src={imageVisi} alt="Visi" className="w-full h-full object-cover" />
                        <LogoSecunderIcon className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[158px] h-[40px]" />
                    </div>
                </div>

                {/* Konten */}
                <div className="col-span-2 lg:text-left">
                    <h1 className="font-bold text-[28px] md:text-[36px] leading-tight text-[var(--color-text-heading)] my-5">
                        Visi
                    </h1>
                    <p className="text-[18px] md:text-[24px] text-justify">
                        We are committed to becoming a trusted digital agriculture platform, connecting farmers to global markets, and enhancing productivity and income through the use of effective technology and innovation.
                    </p>
                </div>

                {/* Desktop: Gambar di kanan */}
                <div className="hidden lg:block">
                    <div className="relative rounded-xl h-[300px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#4FD046] to-transparent bg-opacity-50 h-[100px] rounded-t-xl"></div>
                        <img src={imageVisi} alt="Visi" className="w-full h-full object-cover" />
                        <LogoSecunderIcon className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[158px] h-[40px]" />
                    </div>
                </div>
            </div>

            {/* Misi */}
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 items-center py-10 md:py-16">
                {/* Mobile & Tablet: Gambar di atas */}
                <div className="lg:hidden w-full">
                    <div className="relative rounded-xl h-[250px] md:h-[300px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#4FD046] to-transparent bg-opacity-50 h-[100px] rounded-t-xl"></div>
                        <img src={imageMisi} alt="Misi" className="w-full h-full object-cover" />
                        <LogoSecunderIcon className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[158px] h-[40px]" />
                    </div>
                </div>

                {/* Desktop: Gambar di kiri */}
                <div className="hidden lg:block">
                    <div className="relative rounded-xl h-[300px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#4FD046] to-transparent bg-opacity-50 h-[100px] rounded-t-xl"></div>
                        <AiIcon className="w-full h-full object-cover" />
                        <LogoSecunderIcon className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[158px] h-[40px]" />
                    </div>
                </div>

                {/* Konten */}
                <div className="col-span-2 lg:text-left">
                    <h1 className="font-bold text-[28px] md:text-[36px] leading-tight text-[var(--color-text-heading)] my-5">
                        Misi
                    </h1>
                    <p className="text-[18px] md:text-[24px] text-justify">
                        Tani Verse is dedicated to developing an integrated digital platform that connects farmers with global markets, boosts productivity and income through technology and innovation, builds a sustainable network of farmers, distributors, and consumers, and provides educational and training services to enhance farmers' skills.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VisiMisi;