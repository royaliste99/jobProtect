import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Fonction de validation d'email côté serveur
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Fonction de validation de téléphone
const isValidPhone = (phone: string) => /^\d{10}$/.test(phone);  // Valide un numéro de téléphone à 10 chiffres

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, phone, consent } = req.body;

        // Valider les données reçues
        if (!name || !isValidEmail(email) || !isValidPhone(phone) || !consent) {
            return res.status(400).json({ success: false, message: 'Données invalides' });
        }

        // Configurer Nodemailer pour envoyer l'email
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,  // Adresse email de l'expéditeur
                pass: process.env.EMAIL_PASS,  // Mot de passe ou mot de passe d'application
            },
        });

        try {
            // Envoyer l'email
            await transporter.sendMail({
                from: email,  // Adresse de l'expéditeur (visiteur du site)
                to: process.env.EMAIL_TO,  // Adresse email où recevoir le message
                subject: `Demande de devis de ${name}`,
                text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nConsentement: ${consent ? 'Oui' : 'Non'}`,
            });

            // Réponse de succès
            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de l\'email.' });
        }
    } else {
        res.status(405).json({ message: 'Méthode non autorisée' });
    }
}
