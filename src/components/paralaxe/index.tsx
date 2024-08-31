"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import casqueAntibruit from "../../../public/icone/img/casque-antibruit.svg";
import casqueProtection from "../../../public/icone/img/casque-de-protection.svg";
import chaussure from "../../../public/icone/img/chaussure.svg";
import gant from "../../../public/icone/img/gant.svg";
import lunetteProtection from "../../../public/icone/img/lunette-de-protection.svg";
import masque from "../../../public/icone/img/masque.svg";
import pantalon from "../../../public/icone/img/pantalon.svg";
import veste from "../../../public/icone/img/veste.svg";

export default function Paralaxe() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const upElements = document.querySelectorAll('.parallax-up');
      const downElements = document.querySelectorAll('.parallax-down');

      upElements.forEach(element => {
        (element as HTMLElement).style.transform = `translateY(${scrollPosition * 0.3}px)`;
      });

      downElements.forEach(element => {
        (element as HTMLElement).style.transform = `translateY(-${scrollPosition * 0.3}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 flex justify-between items-center overflow-hidden">
      <Image src={casqueAntibruit} alt="" className="parallax-up initial-up mb-40" />
      <Image src={casqueProtection} alt="" className="parallax-down initial-down mt-80" />
      <Image src={chaussure} alt="" className="parallax-up initial-up mb-80" />
      <Image src={gant} alt="" className="parallax-down initial-down mt-40" />
      <Image src={lunetteProtection} alt="" className="parallax-up initial-up mb-80" />
      <Image src={masque} alt="" className="parallax-down initial-down mt-80" />
      <Image src={pantalon} alt="" className="parallax-up initial-up  mb-80" />
      <Image src={veste} alt="" className="parallax-down initial-down  mt-40" />
      <style jsx>{`
        .parallax-up, .parallax-down {
          transition: transform 0.1s;
        }
        .initial-up {
          transform: translateY(-30px);
        }
        .initial-down {
          transform: translateY(30px);
        }
      `}</style>
    </div>
  );
}
