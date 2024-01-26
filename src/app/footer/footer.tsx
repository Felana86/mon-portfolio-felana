import React from 'react'
import styles from './footer.module.css'

export const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
            <img src={"/linked-in"} alt={"linkedin"} />
            <img src={"/github-in"} alt={"github"}/>
        </div>
    )
}