"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import logojp from "../../../public/img/logoDupont.svg";

export default function Contacte() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        consent: false,
    });
    
    const [messageSent, setMessageSent] = useState(false); // Gérer l'état après l'envoi
    const [isSubmitting, setIsSubmitting] = useState(false); // Empêcher les soumissions multiples

    // Validation des champs (côté client)
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone: string) => /^\d{10}$/.test(phone);  // Validation simple pour un numéro de téléphone à 10 chiffres

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Empêcher le rechargement de la page

        // Validation des champs côté client
        if (!formData.name || !isValidEmail(formData.email) || !isValidPhone(formData.phone)) {
            alert("Veuillez remplir tous les champs correctement.");
            return;
        }

        setIsSubmitting(true); // Désactiver le bouton pour empêcher les soumissions multiples

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Envoyer les données du formulaire
        });

        if (res.ok) {
            setMessageSent(true);
            alert('Message envoyé avec succès !');
        } else {
            alert('Erreur lors de l\'envoi du message.');
        }

        setIsSubmitting(false); // Réactiver le bouton après la soumission
    };

    return (
        <div className="relative w-full bg-custom-image bg-no-repeat bg-cover bg-bottom h-screen flex flex-col justify-center items-center mt-32">
            <div className="flex flex-row items-center gap-40 relative z-10 below-lg:flex-col below-lg:gap-10">
                <Image src={logojp} alt="Logo" className='rounded-full below-xg:hidden' width={342} height="200" />
                
                <form onSubmit={handleSubmit} className='w-full max-w-md gap-6 flex flex-col p-6 form below-xg:max-w-xs' id='formulaire'>
                    <p className='text-2xl font-bold justify-items-center text-center text-white'>
                        Besoin de vous <span className='bg-yellowGreen'>
                            <span className='bg-clip-text text-transparent bg-custom-gradient p-2'>équipez ?</span>
                        </span>
                    </p>
                    <p className='text-center text-white text-xs '>Demandez un devis en prenant rendez-vous</p>

                    {/* Inputs du formulaire */}
                    <input
                        type="text"
                        placeholder="Nom"
                        className="p-2 rounded"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 rounded"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Téléphone"
                        className="p-2 rounded"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                    />

                    {/* Consentement */}
                    <label className="text-white text-xs flex items-start">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={formData.consent}
                            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                            required
                        />
                        <p>J&apos;accepte que mes données soient mémorisées dans l&apos;unique but d&apos;être recontacté</p>
                    </label>

                    {/* Bouton de soumission */}
                    <button 
                        type="submit" 
                        className="p-2 bg-white rounded text-black cursor-pointer ml-72 below-xg:ml-0"
                        disabled={isSubmitting}  // Désactiver le bouton après soumission
                    >
                        {isSubmitting ? "Envoi..." : "Envoyer"}  {/* Texte dynamique */}
                    </button>
                </form>
            </div>
        </div>
    );
}
