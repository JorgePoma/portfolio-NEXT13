import React from 'react'
import styles from '../page.module.css'
import { FaGithub, FaInstagram, FaGitlab, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
    return (
        <div className={styles.main}>
            <div className={styles.grid}>
                <a className={styles.card}>
                    <h1>Contacto</h1>
                </a>
            </div>
            <div className={styles.gridContact}>
                <a 
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
                ><p><FaGithub size={'4em'} className={styles.icon}/></p></a>
                <a
                 href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                 className={styles.card}
                 target="_blank"
                 rel="noopener noreferrer"
                 ><p><FaGitlab size={'4em'} className={styles.icon}/></p></a>
                <a
                 href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                 className={styles.card}
                 target="_blank"
                 rel="noopener noreferrer"
                 ><p><FaLinkedin size={'4em'} className={styles.icon}/></p></a>
                <a
                 href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                 className={styles.card}
                 target="_blank"
                 rel="noopener noreferrer"
                 ><p><FaInstagram size={'4em'} className={styles.icon}/></p></a>
            </div>
        </div>
    )
}

