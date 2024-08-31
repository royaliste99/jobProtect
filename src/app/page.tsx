"use client"
import Header from "@/components/header";
import ParallaxCarousel from "@/components/carou";
import Main from "@/components/main";
import Blog from "@/components/blog";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="">
      <Header/>
      <ParallaxCarousel/>
      <Main/>
      <Blog/>
      <Footer/>
    </main>
  );
}
