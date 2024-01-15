import Image from 'next/image'
import styles from './page.module.css'
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>

        <div className={styles.center}>
            <Image
                className={styles.felana}
                src="/felana.jpg"
                alt="Felana profil"
                width={300}
                height={350}
                priority
            />
        </div>

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
    </main>
  )
}
