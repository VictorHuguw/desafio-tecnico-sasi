"use client"
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import { CarouselProps } from "@/interfaces/Carousel";
import { API_BASE_URL, SITE_BASE_URL } from "@/utils/constants";

const CarouselComponent: React.FC<CarouselProps> = ({ slidesData }) => {
  const [contrast, setContrast] = useState(false);

  const toggleContrast = () => {
    setContrast(!contrast);
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="carousel-container h-screen flex flex-col justify-center items-center bg-gray-200">
        <div className="flex justify-end mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={toggleContrast}
          >
            {contrast ? "Desabilitar Contraste" : "Habilitar Contraste"}
          </button>
        </div>
        
        {slidesData.length > 0 && (
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            emulateTouch={true}
            showStatus={false}
            autoPlay={true}
            interval={3000}
          >
            {slidesData.map((slide) => (
              <div key={slide.id}>
                <Link href={`${SITE_BASE_URL}/${slide.url_redirect}`}>
                  <div className="cursor-pointer">
                    <Image
                      src={`${API_BASE_URL}${slide.img.data.attributes.url}`}
                      alt={slide.img.data.attributes.alternativeText || "Descrição da imagem"}
                      layout="responsive"
                      width={500}
                      height={100}
                      style={{ filter: contrast ? "contrast(150%)" : "none" }}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default CarouselComponent;
