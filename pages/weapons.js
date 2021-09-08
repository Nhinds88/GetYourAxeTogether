import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Layout from '@components/Layout';
import Container from '@components/Container';

import wsteel from '../products/steel-weapons.json'
import welven from '../products/elven-weapons.json'
import wargonian from '../products/argonian-weapons.json'
import wnordic from '../products/nordic-weapons.json'
import worcish from '../products/orcish-weapons.json'

export default function Home() {
    return (
      <Layout>
        <Container className={styles.homeContainer}>
          <Head>
            <title>Get Your Axe Together - Weapons</title>
            <meta name="description" content="Weapons shop in elder scrolls" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>
              Weapons
            </h1>
    
            <p className={styles.description}>
              For when its time to do some stabbing yourself!
            </p>
            
            <h2>Steel Weapons</h2>
            <div className={styles.grid}>
              {wsteel.map(product => {
                return (
                  <div key={product.id} className={styles.card}>
                    <h3>{ product.title }</h3>
                    <img src={product.image} alt={`Preview of ${product.title}`}/>
                    <p>{ product.description }</p>
                    <p>{ product.price }gp</p>
                    <p>Damage: { product.Damage }</p>
                    <p>Weight: { product.wt }</p>
                    <p>Strength requirement: { product.strreq }</p>
                    <p>Notes: { product.notes }</p>
                  </div>
                );
              })}
            </div>
    
            <h2>Elven Weapons</h2>
            <div className={styles.grid}>
              {welven.map(product => {
                return (
                  <div key={product.id} className={styles.card}>
                    <h3>{ product.title }</h3>
                    <img src={product.image} alt={`Preview of ${product.title}`}/>
                    <p>{ product.description }</p>
                    <p>{ product.price }gp</p>
                    <p>Damage: { product.Damage }</p>
                    <p>Weight: { product.wt }</p>
                    <p>Strength requirement: { product.strreq }</p>
                    <p>Notes: { product.notes }</p>
                  </div>
                );
              })}
            </div>
            
            <h2>Argonian Weapons</h2>
            <div className={styles.grid}>
              {wargonian.map(product => {
                return (
                  <div key={product.id} className={styles.card}>
                    <h3>{ product.title }</h3>
                    <img src={product.image} alt={`Preview of ${product.title}`}/>
                    <p>{ product.description }</p>
                    <p>{ product.price }gp</p>
                    <p>Damage: { product.Damage }</p>
                    <p>Weight: { product.wt }</p>
                    <p>Strength requirement: { product.strreq }</p>
                    <p>Notes: { product.notes }</p>
                  </div>
                );
              })}
            </div>
            
            <h2>Nordic Weapons</h2>
            <div className={styles.grid}>
              {wnordic.map(product => {
                return (
                  <div key={product.id} className={styles.card}>
                    <h3>{ product.title }</h3>
                    <img src={product.image} alt={`Preview of ${product.title}`}/>
                    <p>{ product.description }</p>
                    <p>{ product.price }gp</p>
                    <p>Damage: { product.Damage }</p>
                    <p>Weight: { product.wt }</p>
                    <p>Strength requirement: { product.strreq }</p>
                    <p>Notes: { product.notes }</p>
                  </div>
                );
              })}
            </div>
            
            <h2>Orcish Weapons</h2>
            <div className={styles.grid}>
              {worcish.map(product => {
                return (
                  <div key={product.id} className={styles.card}>
                    <h3>{ product.title }</h3>
                    <img src={product.image} alt={`Preview of ${product.title}`}/>
                    <p>{ product.description }</p>
                    <p>{ product.price }gp</p>
                    <p>Damage: { product.Damage }</p>
                    <p>Weight: { product.wt }</p>
                    <p>Strength requirement: { product.strreq }</p>
                    <p>Notes: { product.notes }</p>
                  </div>
                );
              })}
            </div>
            
          </main>
        </Container>
      </Layout>
    )
  }