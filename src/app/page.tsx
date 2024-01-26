import Image from 'next/image'
import styles from './page.module.css'
import React from "react";
import { Header } from "@/app/header/header";

export default function Home() {
  return (
    <main className={styles.main}>
        <Header />

        <div className={styles.content}>
            <Image
                className={styles.image}
                src="/felana.jpg"
                alt="Felana profil"
                width={250}
                height={300}
                priority
            />

            <div className={styles.description}>
                <p>
                    "Accroches-toi à tes rèves,
                    <br/>
                    Donnes-toi les moyens d'y arriver,
                    <br/>
                    Ecoutes ton instinct,
                    <br/>
                    Entoures-toi de personnes inspirantes,
                    <br/>
                    Travailles sans relache,
                    <br/>
                    Cultives la graine,
                    <br/>
                    Et quand tu seras pret,
                    <br/>
                    Déploies tes ailes,
                    <br/>
                    Et envoles-toi vers ta destinée."
                </p>
            </div>
        </div>


    </main>
  )
}
