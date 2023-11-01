import React from 'react'
import styles from '../page.module.css'

export default function About() {
    return (
        <div className={styles.main}>
            <div className={styles.grid}>
                <a className={styles.card}>
                    <h1>Sobre mí</h1>
                </a>
            </div>
        </div >
    )
}

