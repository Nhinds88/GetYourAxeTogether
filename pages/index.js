import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Layout from '@components/Layout';
import Container from '@components/Container';

export default function Home() {
  return (
    <Layout>
      <Container className={styles.homeContainer}>
        <Head>
          <title>Get Your Axe Together</title>
          <meta name="description" content="Weapons shop in elder scrolls" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.mainIndex}>
          <h1 className={styles.title}>
            Welcome to <br/> Get Your Axe Together!
          </h1>

          <p className={styles.description}>
            Are you you looking for a blade or something to guard yourself from one?
          </p>
        </main>
      </Container>
    </Layout>
  )
}
