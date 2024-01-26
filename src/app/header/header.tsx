import styles from './header.module.css'
import React from "react";
import Button from "@/components/buttons/button";

export default function Header() {
    return (
       <div className={styles.header}>
           <h1>Felana LETRANGE</h1>

           <div className={styles.menu}>
               <Button />
               <Button />
               <Button />
           </div>
       </div>
    )
}