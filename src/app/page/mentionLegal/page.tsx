"use client"
import Footer from "@/components/footer";
import Navbardeux from "@/components/bar-nav-deux";
import MentionLegal from "@/components/mentionLegal";


export default function Home() {
  return (
    <main className="">
        <Navbardeux/>
        <MentionLegal/>
        <Footer/>
    </main>
  );
}