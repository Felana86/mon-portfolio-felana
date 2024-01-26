import React from "react"
import styles from './button.module.css'

interface Props {
    text: string
}

export const Button: React.FC<Props> = ({ text }) => {
    return (
        <div className={styles.button}>
            { text }
        </div>
    )
}