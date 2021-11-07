import Head from 'next/head'
import { Intro } from '../public/img/Intro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ompa Dev</title>
        <meta name="description" content="Omphalus Kua" />
      </Head>

     <Intro />
    </div>
  )
}
