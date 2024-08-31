"use client";

import React from 'react';
import Image from 'next/image';

import chaussure from "../../../public/img/chaussure-epi.svg"
import gants from "../../../public/img/gants-epi.svg"
import masqueProtection from "../../../public/img/masque-de-protection-epi.svg"
import pantalon from "../../../public/img/pantalon-epi.svg"
import veste from "../../../public/img/veste-epi.svg"

export default async function Categorie() {
    return (
        <div className="w-full">
      <section className="flex w-full mb-15px h-350px">
      <div className="relative max-w-gants w-full h-full mr-15px">
          <Image src={gants} alt="Gants" layout="fill" className="object-cover" />
          <p className="absolute bottom-5 right-20 p-2 text-white font-bold italic text-36">GANTS</p>
        </div>
        <div className="flex max-w-teste w-full h-full">
          <div className="relative max-w-veste w-full h-full mr-15px">
            <Image src={veste} alt="Veste" layout="fill" className="object-cover" />
            <p className="absolute bottom-5 right-6 p-2 text-white font-bold italic text-36">VESTES, GILETS, T-SHIRT</p>
          </div>
          <div className="relative max-w-pantalon w-full h-full">
            <Image src={pantalon} alt="Pantalon" layout="fill" className="object-cover" />
            <p className="absolute bottom-5 left-4 p-2 text-white font-bold italic text-36">PANTALON</p>
          </div>
        </div>
      </section>
      <section className="flex w-full h-350px">
        <div className="relative max-w-Chaussure w-full h-full mr-15px">
          <Image src={chaussure} alt="Chaussure" layout="fill" className="object-cover" />
          <p className="absolute bottom-1 right-20 p-2 text-white font-bold italic text-36">CHAUSSURES</p>
        </div>
        <div className="relative max-w-Protection w-full h-full">
          <Image src={masqueProtection} alt="Masque de Protection" layout="fill" className="object-cover" />
          <p className="absolute top-4 left-5 p-2 text-white font-bold italic text-36">PROTECTION DE <br></br>LA TETE & VISAGE</p>
          
        </div>
      </section>
      <section className="flex w-full ">
        <div className="relative max-w-Chaussure w-full h-full mr-15px">
          <div className="object-cover" ></div>
        </div>
        <div className="relative max-w-Protection w-full h-full">
        <p className="object-cover w-full bg-D5FE04 p-2 text-black font-bold text-center" >et bien plus encore en prenant contact avec nous !</p>
          
          
        </div>
      </section>
      
    </div>
    );
}