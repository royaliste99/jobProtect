import { client } from '../../../../../lib/sanity';
import { notFound } from 'next/navigation';
import Navbardeux from "@/components/bar-nav-deux";
import ArticleContent from '../../../../components/article';
import Footer from "@/components/footer";

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await client.fetch(
    `*[_type == "post" && _id == $id]{title, body, mainImage}[0]`,
    { id: params.id }
  );

  if (!article) {
    return notFound();
  }

  return (
    <main className="">
      <Navbardeux/>
      <ArticleContent 
        title={article.title} 
        imageRef={article.mainImage.asset._ref} 
        body={article.body} 
      />
      <Footer/>
    </main>
  );
}
