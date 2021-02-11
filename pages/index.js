import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>iffa.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to iffa.dev
        </h1>

        <p className={styles.description}>
          There's not much here yet, but do <a href="https://github.com/iffa/iffa.dev">come back later</a>!
        </p>
      </main>
    </div>
  )
}
