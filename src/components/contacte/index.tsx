"use client";

import React from 'react';
import Image from 'next/image';
import logojp from "../../../public/img/logojp.png";
export default function Contacte() {
    return (
        <div className="relative w-full bg-custom-image bg-no-repeat bg-cover bg-bottom h-screen flex flex-col justify-center items-center">
            <div className="flex flex-row items-center gap-40 relative z-10">
                <Image src={logojp} alt="" className='rounded-full' width="300" height="200" />
                <div className='w-full max-w-md gap-6 flex flex-col p-6 form'>
                    <p className='text-20 font-bold justify-items-center text-center text-white'>
                        Besoin de vous <span className='bg-yellowGreen'>
                            <span className='bg-clip-text text-transparent bg-custom-gradient p-2'>équipez ?</span>
                        </span>
                    </p>
                    <p className='text-center text-black'>Demandez un devis en prenant rendez-vous</p>
                    <input type="text" placeholder="Nom" className="p-2 rounded" />
                    <input type="email" placeholder="Email" className="p-2 rounded" />
                    <input type="tel" placeholder="Téléphone" className="p-2 rounded" />
                    <label className="text-black">
                        <input type="checkbox" className="mr-2" />
                        J’accepte que mes données soient mémorisées dans l’unique but d’être recontacté
                    </label>
                    <input type="button" value="Envoyer" className="p-2 bg-yellowGreen rounded text-black cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
