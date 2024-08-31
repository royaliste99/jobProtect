"use client";

import Categorie from "../categorie";
import Contacte from "../contacte";
import PourquoiNous from "../pourquoiNous";


export default async function Main() {
    return (
        <>
            <Categorie />
            <PourquoiNous/>
            <Contacte/>
        </>
    );
}