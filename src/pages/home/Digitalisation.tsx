import imageGroup from '../../assets/images/image-group.svg';

const Digitalisation = () => {
    return (
        <div className='relative container mx-auto flex flex-col items-center text-center lg:h-[853px] md:h-auto sm:h-auto px-6 mt-[-80px] max-w-[1200px]'>

            {/* Gambar hanya absolute di Desktop & Laptop */}
            <div className="absolute inset-0 w-full h-full lg:block hidden">
                <img
                    src={imageGroup}
                    alt="image group"
                    className="w-full h-auto object-cover max-h-[853px]"
                />
            </div>

            {/* Teks Tetap di Atas */}
            <div className='w-full relative top-16 z-10 max-w-[900px] mx-auto'>
                <h1 className='font-bold text-[40px] leading-[60px] 
            xl:text-[38px] xl:leading-[56px] lg:text-[34px] lg:leading-[50px] 
            md:text-[30px] md:leading-[42px] sm:text-[26px] sm:leading-[36px] 
            text-[var(--color-text-heading)] text-center'>
                    Digitalisation In Agricultural
                </h1>

                <p className='text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] 
            text-[var(--color-text)] text-center max-w-[800px] mx-auto'>
                    Increasing efficiency and productivity through technology
                    helps farmers make better <br className="hidden sm:block" /> decisions and supports a more modern and sustainable agriculture.
                </p>
            </div>

            {/* Gambar hanya muncul di Mobile & Tablet setelah teks */}
            <div className="w-full lg:hidden flex justify-center mt-6">
                <img
                    src={imageGroup}
                    alt="image group"
                    className="w-full h-auto object-contain 
            md:h-[450px] sm:h-[350px] h-[300px] max-w-[800px]"
                />
            </div>

        </div>
    );
}

export default Digitalisation;

