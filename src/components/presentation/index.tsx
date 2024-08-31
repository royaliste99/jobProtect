import React from 'react';
export default async function Presentation() {
    return (
        <div className="flex  mt-25">
            <div className='flex-1'></div>
            <div className=' flex flex-col flex-1'>
                <h2 className='text-40 font-bold justify-items-center text-center'>Retrouvez le <span className='bg-yellowGreen'><span className='bg-clip-text text-transparent bg-custom-gradient p-2'>meilleur</span></span> de l’Equipements de Protection Individuelle</h2>
                <p className='text-16 mt-27 justify-items-center text-center'>Nous vous proposons un large choix d’equipement de protection individuelle grâce à nos différents partenaire, vous pourrez choisir entre différentes marques, couleurs, produits et le tout personnalisable à votre image.</p>
                <input type="button" value="Nos partenaires & produits" className="bg-yellowGreen text-black justify-items-center mt-27 hover:bg-custom-gradient text-center p-2"/>
            </div>
            <div className='flex-1'></div>

        </div>
    );
}