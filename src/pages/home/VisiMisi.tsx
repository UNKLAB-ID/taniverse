import imageVisi from "../../assets/images/visi.svg";
import LogoSecunderIcon from "../../assets/icons/iconst-logo-secunder";
import LineIcon from "../../assets/icons/iconst-line";
import AiIcon from "../../assets/icons/iconst-ai";

const VisiMisi: React.FC = () => {
    return (
        <div >
            <div className="grid grid-cols-3 gap-4 px-15">
                <div className="col-span-2 flex flex-col justify-center items-center">
                    <div className="flex justify-between w-full items-center">
                        <h3 className="text-[24px] mr-1" >Visi Misi</h3>
                        <LineIcon className="w-[660px]" />
                    </div>
                    <div>
                        <h1 className="font-bold text-[36px] leading-[48px] text-[var(--color-text-heading)] my-5">Visi</h1>
                        <p className=" text-justify font-normal text-[24px]">
                            We are committed to becoming a trusted digital agriculture platform, connecting farmers to global markets, and enhancing productivity and income through the use of effective technology and innovation.
                        </p>
                    </div>
                </div>
                <div >
                    <div className="relative rounded-[16px] h-[300px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#4FD046] to-[rgba(102,102,102,0)] bg-opacity-50 w-full h-[100px] rounded-[10px]"></div>
                        <img src={imageVisi} alt="list" className="w-full h-full object-cover rounded-lg" />
                        <LogoSecunderIcon className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[158px] h-[40px]" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 px-15 py-30">
                <div className="relative rounded-[16px] h-[300px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#4FD046] to-[rgba(102,102,102,0)] bg-opacity-50 w-full h-[100px] rounded-[10px]"></div>
                    <AiIcon className="w-full h-full object-cover rounded-lg" />
                    <LogoSecunderIcon className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[158px] h-[40px]" />
                </div>
                <div className="col-span-2 flex flex-col justify-center items-center">
                    <div>
                        <h1 className="font-bold text-[36px] leading-[48px] text-[var(--color-text-heading)] my-5">Misi</h1>
                        <p className=" text-justify font-normal text-[24px]">
                            Tani Pintar is dedicated to developing an integrated digital platform that connects farmers with global markets, boosts productivity and income through technology and innovation, builds a sustainable network of farmers, distributors, and consumers, and provides educational and training services to enhance farmers' skills.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisiMisi;