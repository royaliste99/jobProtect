"use client";

import React from 'react';
import Image from 'next/image';
import logojp from "../../../public/img/logojp.png"
export default  function Navbardeux() {
    return (
        <div className="flex justify-between mx-25 below-xg:mx-10 below-xg:flex-col below-xg:items-center">
            <Image src={logojp} alt="" className='rounded-full below-xg:mb-12' width="190" height="100"/>
            <div className="flex items-center">
                <a className="ml-5" href="/#blog" >Actualités</a>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-5 below-lg:hidden'>
                    <path d="M4.82667 10.3867C6.74667 14.16 9.84 17.24 13.6133 19.1733L16.5467 16.24C16.9067 15.88 17.44 15.76 17.9067 15.92C19.4 16.4133 21.0133 16.68 22.6667 16.68C23.4 16.68 24 17.28 24 18.0133V22.6667C24 23.4 23.4 24 22.6667 24C10.1467 24 0 13.8533 0 1.33333C0 0.6 0.6 0 1.33333 0H6C6.73333 0 7.33333 0.6 7.33333 1.33333C7.33333 3 7.6 4.6 8.09333 6.09333C8.24 6.56 8.13333 7.08 7.76 7.45333L4.82667 10.3867Z" fill="#1B1A25"/>
                </svg>

                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-5 below-lg:hidden'>
                    <path d="M27 0H3C1.35 0 0.015 1.35 0.015 3L0 21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM27 6L15 13.5L3 6V3L15 10.5L27 3V6Z" fill="#1B1A25"/>
                </svg>

                <style jsx>{`
                        .default-fill {
                        fill: #071D28;
                        transition: fill 0.3s ease;
                        }
                        .icon:hover .default-fill {
                        fill: url(#customGradient);
                        }
                        `}
                </style>
                <a className="bg-white text-black py-2 px-3 borderHoverA ml-5" href="/#formulaire" >Contact</a>
            </div>
        </div>
    );
}