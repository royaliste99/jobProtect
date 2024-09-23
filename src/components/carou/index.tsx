"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';  // Importer le style de base de Swiper
import 'swiper/css/pagination';  // Importer le style pour la pagination
import 'swiper/css/navigation';  // Importer le style pour la navigation
import Image from 'next/image';

const images = [
  {
    title: "cepovett",
    imageUrl: "/logo/img/cepovett.jpg",
  },
  {
    title: "Falk&Ross",
    imageUrl: "/logo/img/Falk&Ross.png",
  },
  {
    title: "lemaitre",
    imageUrl: "/logo/img/lemaitre.png",
  },
  {
    title: "s24",
    imageUrl: "/logo/img/logo-s24.jpg",
  },
  {
    title: "lShopTeam",
    imageUrl: "/logo/img/lShopTeam.jpeg",
  },
  {
    title: "molinel",
    imageUrl: "/logo/img/molinel.webp",
  },
  {
    title: "REMI-CONFECTION",
    imageUrl: "/logo/img/REMI-CONFECTION.webp",
  },
  {
    title: "Sols",
    imageUrl: "/logo/img/Sols.png",
  },
  {
    title: "tractel",
    imageUrl: "/logo/img/tractel-logo.png",
  },
  {
    title: "u-power",
    imageUrl: "/logo/img/Upower.png",
  },
  {
    title: "Covergarde",
    imageUrl: "/logo/img/Covergarde.jpeg",
  },
];

export default function ParallaxCarousel() {
  return (
    <div className="flex-carou relative mt-32">
      <div className="blur-zone left"></div>
      <div className="w-full z-0 relative">
        <div className="parallax-carousel">
          {/* Carrousel 1 */}
          <Swiper
            loop={true}
            breakpoints={{
              320: { slidesPerView: 3 },  // 3 slides pour petits écrans
              550: { slidesPerView: 5 },  // 5 slides pour écrans moyens
              768: { slidesPerView: 7 },  // 7 slides pour grands écrans
            }}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
            spaceBetween={35}
            speed={1500}
            className="swiper-wrapper"
          >
            {images.map((image) => (
              <SwiperSlide key={image.title}>
                <div className="parallax-bg items-center flex">
                  <Image src={image.imageUrl} alt={image.title} width={100} height={100} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Carrousel 2 */}
          <Swiper
            loop={true}
            breakpoints={{
              320: { slidesPerView: 3 },  
              550: { slidesPerView: 5 },  
              768: { slidesPerView: 7 },  
            }}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            spaceBetween={35}
            speed={1500}
            className="swiper-wrapper mt-10"
          >
            {images.map((image) => (
              <SwiperSlide key={image.title}>
                <div className="parallax-bg items-center flex">
                  <Image src={image.imageUrl} alt={image.title} width={100} height={100} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="blur-zone right"></div>
      <style jsx>{`
        .parallax-carousel {
          width: 100%;
          height: 100px;
        }
        .parallax-bg {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }
        .flex-carou {
          display: flex;
          position: relative;
          width: 100%;
          height: 250px;
        }
        .blur-zone {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 35%;
          z-index: 10;
          pointer-events: none; 
          background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        }
        .blur-zone.right {
          right: 0;
          background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        }
        .blur-zone.left {
          left: 0;
        }
      `}</style>
    </div>
  );
}
