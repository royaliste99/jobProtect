import { useEffect, useState } from 'react';
import { client, urlFor } from '../../../lib/sanity';
import Link from 'next/link';
import Image from 'next/image';
import fleche from "../../../public/img/fleche-article.svg";
import flecheTout from "../../../public/img/voir-tout.svg";

interface Post {
  _id: string; // Ajoutez cet identifiant unique
  title: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  body: any;
  publishedAt: string;
}

const NouveauArticle = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"]{_id, title, mainImage, body, publishedAt}`) // Incluez le champ _id dans la requête
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto px-4 mt-32">
      <h2 className="text-4xl font-bold mb-10" id='blog'>
          <span className=" bg-custom-gradient text-white p-2">Nos actualités</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {posts
          .slice(-3) // Sélectionne les 3 derniers articles
          .map((post) => {
            const maxLength = 100; // Limite de caractères pour le texte
            const truncatedText = post.body[0]?.children[0]?.text.slice(0, maxLength) + '...';

            return (
              <div key={post._id} className="card flex flex-col items-start p-6 bg-white transition-shadow duration-300">
                {/* Image avec box-shadow appliqué sur les côtés gauche et droit */}
                <div className="relative w-full h-40 mb-4">
                  <Image 
                    src={urlFor(post.mainImage.asset._ref).url()}
                    alt={post.title}
                    width={500} // Largeur fixe
                    height={300} // Hauteur fixe
                    layout="responsive"
                    className="w-full h-48 object-cover relative z-10"
                    style={{
                      boxShadow: "10px 5px 15px rgba(128, 128, 128, 0.5), -10px 5px 15px rgba(128, 128, 128, 0.5)", // Ombres à gauche et à droite uniquement
                      }}
                  />
                </div>

                <h2 className="text-2xl mt-4">{post.title}</h2>
                <p className="text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <div className="prose mt-2 flex-grow">
                  <p>{truncatedText}</p>
                </div>
                <div className=" self-end mt-4">
                  <Link href={`/page/article/${post._id}`} passHref>
                    <button className="flex items-center text-black bg-white border border-black py-2 px-4 hover:bg-gray-100 transition-colors duration-300">
                      Lire l&apos;article
                      <span className="ml-2">
                        <Image src={fleche} alt="flèche" width={16} height={16} />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      
      {/* Bouton "Tout afficher" en dessous des articles */}
      <div className="flex justify-end mt-12">
        <Link href="/page/toutArticle" passHref>
          <button className="flex items-center text-black bg-white py-2 px-6 hover:bg-gray-100 transition-colors duration-300">
          Voir tout
            <span className="ml-2">
              <Image src={flecheTout} alt="flèche" width={16} height={16} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NouveauArticle;
