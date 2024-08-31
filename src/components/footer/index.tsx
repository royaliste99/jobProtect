import React from 'react';
import Image from 'next/image';
import logojp from "../../../public/img/logojp.png";

export default function Footer() {
  return (
    <footer className="flex justify-around items-center py-4">
      <div className='flex items-center'>
        <Image src={logojp} alt="" className='rounded-full' width="110" height="100" />
        <p className='text-center ml-4'>Mentions légales | Politique de confidentialité</p> 
      </div>
      <div className='flex items-center'>
        <p>
          © 2024 Dupont EPI. Tous droits réservés
        </p>
      </div>
    </footer>
  );
}

