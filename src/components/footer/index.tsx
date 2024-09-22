import React from 'react';
import Image from 'next/image';
import logojp from "../../../public/img/logoDupont.png";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex justify-around items-center py-4 mt-32">
      <div className='flex items-center'>
        <Image src={logojp} alt="" className='rounded-full below-xg:hidden' width="110" height="100" />
        <Link href="/page/mentionLegal" passHref>
          <p className='text-center ml-4' >Mentions légales | Politique de confidentialité</p>
        </Link> 
      </div>
      <div className='flex items-center'>
        <p>
          © 2024 Dupont EPI. Tous droits réservés
        </p>
      </div>
    </footer>
  );
}

