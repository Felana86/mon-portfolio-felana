import styles from './menu.module.css'
import React from "react";
import { Button } from "@/components/buttons/button";

export default function Menu() {
    return (
        <div className={styles.container}>
            <Button text={"Blog"}/>
            <Button text={"A propos"}/>
            <Button text={"Projets"}/>
        </div>
    )
}