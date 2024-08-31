"use client"
import Header from "@/components/header";
import ParallaxCarousel from "@/components/carou";
import Main from "@/components/main";
import NouveauArticle from "@/components/blog";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="">
      <Header/>
      <ParallaxCarousel/>
      <Main/>
      <NouveauArticle/>
      <Footer/>
    </main>
  );
}
