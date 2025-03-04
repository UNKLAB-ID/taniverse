import SvgIconLeft from "../../assets/icons/iconst-left";
import SvgIconRigth from "../../assets/icons/iconst-rigth";
import { useRef, useEffect, useState } from "react";
import LogoSecunderIcon from "../../assets/icons/iconst-logo-secunder";
import LineIcon from "../../assets/icons/iconst-line";
import AiIcon from "../../assets/icons/iconst-ai";
import iconMedia1 from "../../assets/images/icon-value-media1.svg";
import iconMedia2 from "../../assets/images/icon-value-media2.svg";
import iconMedia3 from "../../assets/images/icon-value-media3.svg";
import icontCommerce1 from "../../assets/images/icont-commerce1.svg";
import icontCommerce2 from "../../assets/images/icont-commerce2.svg";
import icontCommerce3 from "../../assets/images/icont-commerce3.svg";
import icontAi1 from "../../assets/images/icont-ai1.svg";
import icontAi2 from "../../assets/images/icont-ai2.svg";
import icontAi3 from "../../assets/images/icont-ia3.svg";
import iconAgen1 from "../../assets/images/icont-agen1.svg"
import iconAgen2 from "../../assets/images/icont-agen2.svg"
import iconAgen3 from "../../assets/images/icon-agen3.svg"
import iconNews1 from "../../assets/images/icont-news1.svg"
import iconNews2 from "../../assets/images/icont-news2.svg"
import iconNews3 from "../../assets/images/icont-news3.svg"
import imageMedia from "../../assets/images/iamge-media.svg"
import imageAi from "../../assets/images/image-ai.svg"
import imageECommerce from "../../assets/images/image-e-commerce.svg"
import imageAgen from "../../assets/images/image-agen.svg"
import imageNews from "../../assets/images/image-news.svg"

const data = [
  {
    label: "Social media",
    image: imageMedia,
    list: [iconMedia1, iconMedia2, iconMedia3],
    description:
      "Build strong networks and strategic partnerships with companies, farmers, and stakeholders to create mutually beneficial synergies.",
  },
  {
    label: "E-Commerce",
    image: imageECommerce,
    list: [icontCommerce1, icontCommerce2, icontCommerce3],
    description:
      "Simplify the buying and selling of agricultural products online, with a secure platform that ensures a smooth and reliable transaction process every time.",
  },
  {
    label: "AI Agriculture",
    image: imageAi,
    list: [icontAi1, icontAi2, icontAi3],
    description:
      "Leverage advanced AI technology to accurately detect pests, diseases, and soil conditions, helping you make informed decisions to enhance crop health and maximize yields.",
  },
  {
    label: "Digital Distributors & Agents",
    image: imageAgen,
    list: [iconAgen1, iconAgen2, iconAgen3],
    description:
      "Easily manage and track the distribution of agricultural products in real-time, ensuring timely deliveries and optimizing your supply chain for maximum efficiency.",
  },
  {
    label: "Agricultural News & Research",
    image: imageNews,
    list: [iconNews1, iconNews2, iconNews3],
    description:
      "Access the latest information on global and local markets, research, and business opportunities in agriculture to keep you informed and support better decision-making",
  },
];

const OurValue = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling] = useState(false);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const scrollAmount = clientWidth * 0.8;

      let newScrollLeft =
        scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);

      // Infinite scroll logic
      if (newScrollLeft <= 0 && direction === "left") {
        newScrollLeft = scrollWidth - clientWidth; // Pindah ke akhir
      } else if (
        newScrollLeft >= scrollWidth - clientWidth &&
        direction === "right"
      ) {
        newScrollLeft = 0; // Pindah ke awal
      }

      container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && !isScrolling) {
        scroll("right");
      }
    }, 6000); // Scroll setiap 5 detik

    // Cleanup interval saat komponen tidak lagi digunakan
    return () => clearInterval(interval);
  }, [isScrolling]);

  return (
    <div className="mx-auto my-10 px-4 md:px-8 lg:px-16 xl:pb-20 pt-0 md:pt-10 lg:pt-20 max-w-screen-xl">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory w-full h-auto scrollbar-none"
      >
        {[...data, ...data].map((item, index) => (
          <div
            className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 snap-center"
            key={index}
          >
            {/* Gambar */}
            <div className="flex items-center justify-center h-[200px] md:h-[300px] lg:h-full rounded-[16px] overflow-hidden">
              <img
                src={item.image}
                alt="image border"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Konten */}
            <div className="flex items-center justify-center">
              <div className="w-full">
                <div className="flex justify-between items-center mb-5 flex-wrap">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold min-w-fit">
                    Our Values
                  </h3>
                  <LineIcon className="w-[100%] lg:w-[100%]" />
                </div>


                {/* Tombol Navigasi */}
                <div className="flex gap-4 my-3 justify-between lg:justify-start">
                  <button
                    className="border w-[50px] md:w-[70px] lg:w-[80px] h-[40px] md:h-[48px] rounded-full flex justify-center items-center border-[var(--color-primary)]"
                    onClick={() => scroll('left')}
                  >
                    <SvgIconLeft />
                  </button>
                  <button
                    className="border w-[50px] md:w-[70px] lg:w-[80px] h-[40px] md:h-[48px] rounded-full flex justify-center items-center border-[var(--color-primary)]"
                    onClick={() => scroll('right')}
                  >
                    <SvgIconRigth />
                  </button>
                </div>

                {/* Judul dan Deskripsi */}
                <h1 className="font-bold text-xl md:text-3xl lg:text-4xl leading-tight text-[var(--color-text-heading)]">
                  {item.label}
                </h1>
                <p className="text-sm md:text-lg text-[#8A8A8A] text-justify my-3 min-w-0">
                  {item.description}
                </p>

                {/* List */}
                <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                  {item.list.map((list, id) => (
                    <div
                      key={id}
                      className="relative w-[100px] md:w-[130px] lg:w-[166px] h-[100px] md:h-[130px] lg:h-[166px] rounded-[16px]"
                    >
                      <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-[#4FD046] to-[rgba(102,102,102,0)] bg-opacity-50 rounded-[10px]"></div>

                      <img
                        src={list}
                        alt="list"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <LogoSecunderIcon className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[80px] md:w-[100px] lg:w-[110.6px]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default OurValue;
