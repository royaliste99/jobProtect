"use client";

import React from 'react';
import Image from 'next/image';
import camion from "../../../public/img/camion.svg";
import personnalisation from "../../../public/img/personnalisation.svg";
import rapide from "../../../public/img/rapide.svg";

export default function PourquoiNous() {
  return (
    <div className='container mx-auto px-4 mt-32'>
      <div className="inline-block bg-custom-gradient text-white text-4xl mb-10 p-2 whitespace-nowrap">
        <p>Pourquoi nous ?</p>
      </div>
      <div className="flex justify-between w-full p-12 below-lg:flex-col below-xg:p-4">
        <div className="flex flex-col items-center text-center mx-4 flex-1">
          <Image src={camion} alt="camion" className=''/>
          <p className="font-bold mt-4 bg-D5FE04 p-2 mb-4">PROXIMITÉ</p>
          <p className='border-x-2 border-t-2 border-black w-full flex-1 p-8 mt-4'>Un accompagnement efficace sur chaque chantier.</p>
        </div>
        <div className="flex flex-col items-center text-center mx-4 flex-1">
          <Image src={rapide} alt="rapide" className=''/>
          <p className="font-bold mt-4 bg-D5FE04 p-2 mb-4">CONTACT RAPIDE</p>
          <p className='border-x-2 border-t-2 border-black w-full flex-1 p-8 mt-4'>Vous pouvez nous contacter et nous répondrons à vos besoins dans les plus brefs délais</p>
        </div>
        <div className="flex flex-col items-center text-center mx-4 flex-1">
          <Image src={personnalisation} alt="personnalisation" className=''/>
          <p className="font-bold mt-4 bg-D5FE04 p-2 mb-4 ">CONSEIL PERSONNALISER</p>
          <p className='border-x-2 border-t-2 border-black w-full flex-1 p-8 mt-4'>Profitez de conseil personnaliser pour choisir vos équipements de Protections </p>
        </div>
      </div>
    </div>
  );
}
