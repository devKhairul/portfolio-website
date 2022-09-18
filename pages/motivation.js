import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Box, Spinner } from '@chakra-ui/react'



export default function Home() {

    const [quote, setQuote] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    const config = {
      headers: {
        'X-RapidAPI-Key': '3cc234d8acmsh41ba4a008de79b7p1968cbjsnf4ff361bdf37',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    }
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/';

    useEffect(() => {
      const getQuote = async () => {
        const data = await axios.get(url, config).then(res=> res.data)
        setQuote(data)
        setIsLoading(false)
      }
      getQuote()
      
      
    }, [])
    


    // console.log(quote)

    return (
      <div className={styles.container}>
        <Head>
          <title>Motivation - Khairul Alam</title>
          <meta name="description" content="A portfolio website for Khairul Alam" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title} style={{marginBottom: "1em"}}>
            Your daily dose of motivation
          </h1>
          
          <p className={styles.description} style={{margin: "10px"}}>
            { isLoading && 'Loading an awesome quote...' }
            { quote.content && quote.content }
          </p>

          { quote.originator && <h2>{quote.originator.name}</h2> }
          
          

          <Box m={4}>
            <h2 className={styles.titlesm}>
              <Link href='/'>
                  <a>&larr; Go back</a>
              </Link> 
            </h2>
          </Box>
          
          <small style={{marginBottom: "3em"}}>Courtesy of RapidAPI</small>
          
        </main>
  
        <footer className={styles.footer}>
          <a
            href="https://linkedin.com/in/devkhairul"
            target="_blank"
            rel="noopener noreferrer"
          >
            Khairul Alam - Developer | Dreamer | Homo Sapien
          </a>
        </footer>
      </div>
    )
  }