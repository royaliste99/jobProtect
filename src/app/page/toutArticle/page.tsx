"use client"
import Footer from "@/components/footer";
import BlogTout from "@/components/blogTout";
import Navbardeux from "@/components/bar-nav-deux";


export default function Home() {
  return (
    <main className="">
        <Navbardeux/>
        <BlogTout/>
        <Footer/>
    </main>
  );
}