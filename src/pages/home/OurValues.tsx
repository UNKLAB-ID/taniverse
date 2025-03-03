import SvgIconLeft from "../../assets/icons/iconst-left";
import SvgIconRigth from "../../assets/icons/iconst-rigth";
import ListImage from "../../assets/images/list-componen.svg";
import { useRef, useEffect, useState } from "react";
import LogoSecunderIcon from "../../assets/icons/iconst-logo-secunder";
import LineIcon from "../../assets/icons/iconst-line";
import AiIcon from "../../assets/icons/iconst-ai";
import MediaIcon from "../../assets/icons/iconst-media";
import DistributorIcon from "../../assets/icons/iconst-distributtor";
import ECommerceIcon from "../../assets/icons/iconst-e-commerce";
import NewsIcons from "../../assets/icons/iconst-news";

const data = [
  {
    label: "Social media",
    image: <MediaIcon />,
    list: [ListImage, ListImage, ListImage],
    description:
      "Build strong networks and strategic partnerships with companies, farmers, and stakeholders to create mutually beneficial synergies.",
  },
  {
    label: "E-Commerce",
    image: <ECommerceIcon />,
    list: [ListImage, ListImage, ListImage],
    description:
      "Simplify the buying and selling of agricultural products online, with a secure platform that ensures a smooth and reliable transaction process every time.",
  },
  {
    label: "AI Agriculture",
    image: <AiIcon />,
    list: [ListImage, ListImage, ListImage],
    description:
      "Leverage advanced AI technology to accurately detect pests, diseases, and soil conditions, helping you make informed decisions to enhance crop health and maximize yields.",
  },
  {
    label: "Digital Distributors & Agents",
    image: <DistributorIcon />,
    list: [ListImage, ListImage, ListImage],
    description:
      "Easily manage and track the distribution of agricultural products in real-time, ensuring timely deliveries and optimizing your supply chain for maximum efficiency.",
  },
  {
    label: "Agricultural News & Research",
    image: <NewsIcons />,
    list: [ListImage, ListImage, ListImage],
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
    <div className="mx-15 my-30 ">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory w-full h-screen scrollbar-none"
      >
        {[...data, ...data].map((item, index) => (
          <div
            className="w-full mx-4 flex-shrink-0 grid grid-cols-2 gap-4 snap-center"
            key={index}
          >
            {/* Baris pertama */}
            <div
              // style={{ backgroundImage: `url(${item.image})` }}
              className="col-end-2 flex items-center justify-center object-cover  h-[500px] bg-cover bg-center rounded-[16px]"
            >
              {item.image}
            </div>
            <div className="flex items-center h-[500px] justify-center">
              <div className="w-full">
                <div className="flex justify-between w-full items-center">
                  <h3 className="text-[24px] mr-1">Our Values</h3>
                  <LineIcon className="w-[450px]" />
                </div>
                <div className="flex gap-4 my-3">
                  <button
                    className={`border w-[80px] h-[48px] rounded-[80px] flex justify-center items-center border-[var(--color-primary)]`}
                    onClick={() => scroll("left")}
                  >
                    <SvgIconLeft />
                  </button>
                  <button
                    className={`border w-[80px] h-[48px] rounded-[80px] flex justify-center items-center border-[var(--color-primary)]`}
                    onClick={() => scroll("right")}
                  >
                    <SvgIconRigth />
                  </button>
                </div>
                <h1 className="font-bold text-[46px] leading-[48px] text-[var(--color-text-heading)]">
                  {item.label}
                </h1>
                <p className="text-[24px] text-[#8A8A8A] text-justify my-3">
                  {item.description}
                </p>

                <div className="flex gap-4 ">
                  {item.list.map((list, id) => (
                    <div
                      key={id}
                      className="relative w-[166px] h-[166px] rounded-[16px]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-[#4FD046] to-[rgba(102,102,102,0)] bg-opacity-50 w-[165] h-[51px] rounded-[16px]"></div>
                      <img
                        src={list}
                        alt="list"
                        className="w-full h-full object-cover rounded-lg"
                      />

                      <LogoSecunderIcon className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[110.6px] h-[28px]" />
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
