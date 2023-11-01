import React from 'react'
import Link from 'next/link'
import styles from './components.module.css'
import { FaCode, FaHandPeace, FaMessage } from 'react-icons/fa6';

export default function Navigator() {
  return (
    <nav className={styles.navigator}>
        <ul>
            <Link href="/about"><li><FaHandPeace/></li></Link>
            <Link href="/proyects"><li><FaCode/></li></Link>
            <Link href="/contact"><li><FaMessage/></li></Link>
        </ul>
    </nav>
  )
}
