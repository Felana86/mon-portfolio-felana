import styles from './header.module.css'
import React from "react";
import Menu from "@/components/menu/menu";

export default function Header() {
    return (
        <div className={styles.container}>

                <h1>Felana LETRANGE</h1>

                <div className={styles.header__menu}>
                    <Menu/>
                </div>

        </div>


    )
}