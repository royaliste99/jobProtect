import { useEffect, useState } from 'react';
import { client, urlFor } from '../../../lib/sanity';
import Link from 'next/link';
import Image from 'next/image';
import fleche from "../../../public/img/fleche-article.svg";
import flecheTout from "../../../public/img/voir-tout.svg";

interface Post {
  _id: string;
  title: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  body: any;
  publishedAt: string;
}

export default function BlogTout() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Page active
  const itemsPerPage = 6; // Nombre d'éléments par page

  useEffect(() => {
    client
      .fetch(`*[_type == "post"]{_id, title, mainImage, body, publishedAt}`)
      .then((data) => {
        // Trier les articles par date de publication (du plus récent au plus ancien)
        const sortedPosts = data.sort((a: Post, b: Post) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        setPosts(sortedPosts);
      });
  }, []);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  // Récupérer les posts pour la page active
  const currentPosts = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Fonction pour changer de page
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <main className="bg-white py-8 overflow-x-hidden mt-32 below-xg:mt-12">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className='bg-yellowGreen'>
            <span className='bg-clip-text text-transparent bg-custom-gradient p-2'>Le blog</span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => {
            const maxLength = 100;
            const truncatedText = post.body[0]?.children[0]?.text.slice(0, maxLength) + '...';

            return (
              <div
                key={post._id}
                className="card flex flex-col items-start p-6 bg-white transition-shadow duration-300"
              >
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

                <p className="text-gray-500 mb-2">
                  {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <h2 className="text-lg font-bold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{truncatedText}</p>

                <div className="mt-auto self-end">
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

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mx-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-300 disabled:bg-gray-100"
          >
            Précédent
          </button>

          {/* Affichage des numéros de page */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-2 px-4 py-2 rounded border border-gray-300 ${currentPage === index + 1 ? 'bg-gray-300 text-black' : 'hover:bg-gray-300'}`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="mx-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-300 disabled:bg-gray-100"
          >
            Suivant
          </button>
        </div>

        {/* Bouton pour retourner à la page d'accueil */}
        <div className="flex justify-center mt-12">
          <Link href="/" passHref>
            <button className="flex items-center text-black bg-white py-2 px-6 hover:bg-gray-100 transition-colors duration-300">
              Retour à l&apos;accueil
            <span className="ml-2">
              <Image src={flecheTout} alt="flèche" width={16} height={16} />
            </span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
