import { client, urlFor } from '../../../lib/sanity';
import Link from 'next/link';
import Image from 'next/image';

interface ArticleContentProps {
  title: string;
  imageRef: string;
  body: any[];
}

const ArticleContent = ({ title, imageRef, body }: ArticleContentProps) => {
  return (
    <div className="p-6 mt-32 below-xg:mt-12">
      <Image
        src={urlFor(imageRef).url()}
        alt={title}
        width={500} // Largeur fixe
        height={300} // Hauteur fixe
        layout="responsive"
        style={{
            maxHeight: '600px',
            width: '100%',
          objectFit: 'contain',
        }}
      />
      <div className="prose ">
      <h1 className="text-4xl font-bold text-center mt-14 mb-8">{title}</h1>
        {body.map((block: any, index: number) => (
          <p key={index} className="text-center ">{block.children[0].text}</p>
        ))}
      </div>
      <div className="flex mt-12 justify-evenly">
        <Link href="/page/toutArticle" passHref>
          <button className="flex items-center text-black bg-white py-2 px-6 hover:bg-gray-100 transition-colors duration-300">
            Voir tout
          </button>
        </Link>
        <Link href="/" passHref>
          <button className="flex items-center text-black bg-white py-2 px-6 hover:bg-gray-100 transition-colors duration-300">
            Retour à l&apos;accueil
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleContent;
