"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { Swiper as SwiperType } from 'swiper';

const images = [
  {
    title: "neofeu",
    imageUrl: "/logo/img/neofeu.webp",
  },
  {
    title: "newWaves",
    imageUrl: "/logo/img/newWaves.webp",
  },
  {
    title: "nordways",
    imageUrl: "/logo/img/nordways.webp",
  },
  {
    title: "parade",
    imageUrl: "/logo/img/parade.webp",
  },
  {
    title: "remi",
    imageUrl: "/logo/img/remi.webp",
  },
  {
    title: "s24",
    imageUrl: "/logo/img/s24.webp",
  },
  {
    title: "showa",
    imageUrl: "/logo/img/showa.webp",
  },
  {
    title: "sols",
    imageUrl: "/logo/img/sols.webp",
  },
  {
    title: "timberland",
    imageUrl: "/logo/img/timberland.webp",
  },
  {
    title: "tractel",
    imageUrl: "/logo/img/tractel.webp",
  },
  {
    title: "u-power",
    imageUrl: "/logo/img/u-power.webp",
  },
  {
    title: "univet",
    imageUrl: "/logo/img/univet.webp",
  },
  {
    title: "utility",
    imageUrl: "/logo/img/utility.webp",
  },
];
export default function ParallaxCarousel() {
  return (
    <div className="flex-carou relative">
        <div className="blur-zone left"></div>
        <div className="w-full z-0 relative">
    <div className="parallax-carousel">
        {/* carrouselle 1 */}
        <Swiper loop={true} slidesPerView={7} modules={[Autoplay, Pagination, Navigation]} autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true, }} spaceBetween={35} speed={1500} className="swiper-wrapper" onSwiper={(swiper: SwiperType) => {
          swiper.on('slideChangeTransitionStart', () => {
            
          });
          
          }}>
          {images.map(image => (
            <SwiperSlide key={image.title} >
              <div className="parallax-bg items-center flex">
                <Image src={image.imageUrl} alt={image.title} width={100} height={100} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* carrouselle 2 */}
        <Swiper loop={true} slidesPerView={7} modules={[Autoplay, Pagination, Navigation]} autoplay={{ delay: 0, disableOnInteraction: false,  }} spaceBetween={35} speed={1500} className="swiper-wrapper">
          {images.map(image => (
            <SwiperSlide key={image.title} >
              <div className="parallax-bg items-center flex">
                <Image src={image.imageUrl} alt={image.title} width={100} height={100}/>
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