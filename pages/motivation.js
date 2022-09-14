import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Motivation - Khairul Alam</title>
          <meta name="description" content="A portfolio website for Khairul Alam" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Your daily dose of motivation
          </h1>
  
          <p className={styles.description}>
            The best coffee takes time to brew. <strong>Something awesome</strong> is brewing here too. <br />For now, hang onto your mug but please come back! 
          </p>
  
          <h2 className={styles.titlesm}>
            <Link href='/'>
                <a>&larr; Go back</a>
            </Link> 
          </h2>
  
  
          
        </main>
  
        <footer className={styles.footer}>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Khairul Alam - Developer | Dreamer | Homo Sapien
          </a>
        </footer>
      </div>
    )
  }