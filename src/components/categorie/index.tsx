"use client";

import React from 'react';
import Image from 'next/image';

import chaussure from "../../../public/img/chaussure-epi.svg"
import gants from "../../../public/img/gants-epi.svg"
import masqueProtection from "../../../public/img/masque-de-protection-epi.svg"
import pantalon from "../../../public/img/pantalon-epi.svg"
import veste from "../../../public/img/veste-epi.svg"

export default function Categorie() {
  return (
    <div className="w-full mt-32" id='categorie'>
      {/* Section 1 */}
      <section className="flex flex-col lg:flex-row w-full mb-15px h-auto lg:h-350px">
        <div className="relative w-full h-64 lg:h-full lg:max-w-gants mr-0 lg:mr-15px">
          <Image src={gants} alt="Gants" layout="fill" className="object-cover" />
          <p className="absolute bottom-5 right-10 lg:right-20 p-2 text-white font-bold italic text-36 below-xg:text-2xl">GANTS</p>
        </div>
        <div className="flex w-full h-64 lg:h-full below-lg:mt-15px">
          <div className="relative w-full h-64 lg:h-full lg:max-w-veste mr-15px">
            <Image src={veste} alt="Veste" layout="fill" className="object-cover" />
            <p className="absolute bottom-5 right-4 lg:right-6 p-2 text-white font-bold italic text-36 below-xg:text-2xl">VESTES, GILETS, T-SHIRT</p>
          </div>
          <div className="relative w-full h-64 lg:h-full lg:max-w-pantalon ">
            <Image src={pantalon} alt="Pantalon" layout="fill" className="object-cover" />
            <p className="absolute bottom-5 left-4 p-2 text-white font-bold italic text-36 below-xg:text-2xl">PANTALON</p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col lg:flex-row w-full h-auto lg:h-350px">
        <div className="relative w-full h-64 lg:h-full lg:max-w-Chaussure mr-0 lg:mr-15px">
          <Image src={chaussure} alt="Chaussure" layout="fill" className="object-cover" />
          <p className="absolute bottom-1 right-10 lg:right-20 p-2 text-white font-bold italic text-36 below-xg:text-2xl">CHAUSSURES</p>
        </div>
        <div className="relative w-full h-64 lg:h-full lg:max-w-Protection below-lg:mt-15px">
          <Image src={masqueProtection} alt="Masque de Protection" layout="fill" className="object-cover" />
          <p className="absolute top-4 left-5 p-2 text-white font-bold italic text-36 below-xg:text-2xl">PROTECTION DE <br /> LA TETE & VISAGE</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="flex flex-col lg:flex-row w-full">
        <div className="relative w-full lg:h-full lg:max-w-Chaussure mr-0 lg:mr-15px">
          <div className="object-cover" ></div>
        </div>
        <div className="relative w-full lg:h-full lg:max-w-Protection">
          <p className="object-cover w-full bg-D5FE04 p-2 text-black font-bold text-center">
            & bien plus encore en prenant contact avec nous !
          </p>
        </div>
      </section>
    </div>
  );
}
