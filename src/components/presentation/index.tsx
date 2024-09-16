import React from 'react';
export default async function Presentation() {
    return (
        <div className="flex mt-25 below-xg:flex-col below-xg:mt-12">
            <div className='flex-1' ></div>
            <div className='flex flex-col flex-1'>
                <h2 className='text-40 font-bold justify-items-center text-center'>Retrouvez le <span className='bg-yellowGreen'><span className='bg-clip-text text-transparent bg-custom-gradient p-2'>meilleur</span></span> de l&apos;Equipements de Protection Individuelle</h2>
                <p className='text-16 mt-27 justify-items-center text-center'>Nous vous proposons un large choix d&apos;equipement de protection individuelle grâce à nos différents partenaire. <br/><span className=' font-semibold'>Conseils, qualité, réactivité Exigez le meilleur de la sécurité!</span></p>
                <a className="mt-6 bg-yellowGreen text-black text-center ml-40 mr-40 p-2 borderHoverB whitespace-nowrap below-xg:hidden" href="/#categorie" >Nos partenaires & produits</a>
                <a className="mt-6 bg-yellowGreen text-black text-center ml-40 mr-40 p-2 borderHoverB hidden below-xg:block below-xg:ml-10 below-xg:mr-10" href="/#categorie" >Nos partenaires & produits</a>
            </div>
            <div className='flex-1'></div>

        </div>
    );
}