import imageGroup from '../../assets/images/image-group.svg';

const Digitalisation = () => {
    return (
        <div className='relative mx-15 flex flex-col items-start justify-start text-left h-[853px] '>
            {/* Image tetap dalam parent dan tidak merusak layout */}
            <img
                src={imageGroup}
                alt="image group"
                className="absolute inset-0 w-full h-full "
            />

            {/* Teks tetap terlihat di atas gambar */}
            <div className='w-full'>
                <h1 className='relative z-10 font-bold text-[56px] leading-[108px] text-[var(--color-text-heading)] text-center'>
                    Digitalisation In Agricultural
                </h1>
                <p className='relative z-10 text-[20px] text-[var(--color-text)] text-center'>
                    Increasing efficiency and productivity through technology
                    helps farmers make better <br /> decisions and supports a more modern and sustainable agriculture.
                </p>

            </div>
        </div>
    );
}

export default Digitalisation;

