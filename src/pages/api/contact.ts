// /src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, phone, consent } = req.body;

        // Configurer Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, // Ton adresse e-mail Gmail
                pass: process.env.EMAIL_PASS, // Ton mot de passe ou un mot de passe d'application si tu utilises Gmail
            },
        });

        try {
            // Envoyer l'e-mail
            await transporter.sendMail({
                from: email, // L'adresse de l'expéditeur (le visiteur du site)
                to: process.env.EMAIL_TO, // Ton adresse e-mail où tu veux recevoir le message
                subject: `Demande de devis de ${name}`,
                text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nConsentement: ${consent ? 'Oui' : 'Non'}`,
            });

            // Répondre avec succès
            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de l\'email.' });
        }
    } else {
        res.status(405).json({ message: 'Méthode non autorisée' });
    }
}
