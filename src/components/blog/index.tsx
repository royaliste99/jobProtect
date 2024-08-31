import { useEffect, useState } from 'react'
import { client, urlFor } from '../../../lib/sanity'

interface Post {
  title: string
  mainImage: {
    asset: {
      _ref: string
    }
  }
  body: any
  publishedAt: string // Ajoutez le champ publishedAt
}

const NouveauArticle = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    client
      .fetch(`*[_type == "post"]{title, mainImage, body, publishedAt}`)
      .then((data) => setPosts(data))
  }, [])

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold">Nos actualités</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts
          .slice(-3) // Sélectionne les 3 derniers articles
          .map((post) => {
            const maxLength = 100; // Limite de caractères pour le texte
            const truncatedText = post.body[0]?.children[0]?.text.slice(0, maxLength) + '...';

            return (
              <div key={post.title} className="card flex flex-col p-4 border rounded shadow-lg">
                <img
                  src={urlFor(post.mainImage.asset._ref).url()}
                  alt={post.title}
                  style={{
                    maxHeight: '200px', // Hauteur maximale pour les images
                    width: '100%', // S'assurer que l'image prend toute la largeur disponible
                    objectFit: 'cover', // Gérer le recadrage des images
                  }}
                />
                <h2 className="text-2xl mt-4">{post.title}</h2>
                <p className="text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <div className="prose mt-2 flex-grow">
                  {/* Afficher le texte tronqué */}
                  <p>{truncatedText}</p>
                </div>
                {/* Conteneur pour aligner le bouton à droite */}
                <div className="mt-4 flex flex-row-reverse">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Afficher l'article
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      {/* Bouton "Tout afficher" en dessous des articles */}
      <div className="flex flex-row-reverse mt-8">
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700">
          Tout afficher
        </button>
      </div>
    </div>
  )
}

export default NouveauArticle
