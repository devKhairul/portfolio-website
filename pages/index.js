import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Khairul Alam</title>
        <meta name="description" content="A portfolio website for Khairul Alam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome <a href="#">Homo Sapien!</a>
        </h1>

        <p className={styles.description}>
          The best coffee takes time to brew. <strong>Something awesome</strong> is brewing here too. <br />For now, hang onto your mug but please come back! 
        </p>

        <h2 className={styles.titlesm}>
          Check this out. Cool, eh? 
          <hr/>
        </h2>


        <div className={styles.grid}>
          <a 
            href="https://movies.khairulalam.dev" 
            target="_blank" 
            className={styles.card}
            rel="noreferrer"  
          >
            <h2>Search Movies &rarr;</h2>
            <p>Search for any movie you can imagine. <small><i>Courtesy of OMDb API.</i></small></p>
          </a>

          <a 
            href="https://fitnessguru.khairulalam.dev" 
            target="_blank" 
            className={styles.card}
            rel="noreferrer"
          >
            <h2>Fitness Guru &rarr;</h2>
            <p>Helps you keep fit. Just look for exercises your heart desire. <small><i>Courtesy of RapidAPI.</i></small></p>
          </a>

          <a
            href="https://reduxapp.khairulalam.dev/" 
            target="_blank"
            className={styles.card}
            rel="noreferrer"
          >
            <h2>Redux What? &rarr;</h2>
            <p>A rudimentaty ecommerce store showing off the capabilities of Redux Toolkit</p>
          </a>

          <a 
            style={{color: "#0070f3",border: "1px solid #0070f3"}}
            href="mailto:khairul.noman@gmail.com"
            className={styles.card}
          >
            <h2>Say hi &rarr;</h2>
            <p>
              Please drop a line if you would like to say hi. I will not ghost you. I promise! 
            </p>
          </a>
        </div>
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
