import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Layout from '@components/Layout';
import Container from '@components/Container';

import shieldsteel from '../products/steel-shields.json'
import shieldelven from '../products/elven-shields.json'
import shieldnordic from '../products/nordic-shields.json'
import shieldorcish from '../products/orcish-shields.json'

export default function Home() {
    return (
      <Layout>
        <Container className={styles.homeContainer}>
          <Head>
            <title>Get Your Axe Together - Shields</title>
            <meta name="description" content="Weapons shop in elder scrolls" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>
              Shields
            </h1>
    
            <p className={styles.description}>
              Guard yourself from the pokey bits out there!
            </p>
            
            <h2>Steel Shields</h2>
            <div className={styles.grid}>
              {shieldsteel.map(product => {
                return (
                  <div key={product.id} className={styles.card}>
                    <h3>{ product.title }</h3>
                    <img src={product.image} alt={`Preview of ${product.title}`}/>
                    <p>{ product.description }</p>
                    <p>{ product.price }gp</p>
                    <p>Parry: { product.Parry }</p>
                    <p>Cover: { product.cover }</p>
                    <p>Weight: { product.wt }</p>
                    <p>Strength requirement: { product.strreq }</p>
                  </div>
                );
              })}
            </div>
    
            <h2>Elven Shields</h2>
            <div className={styles.grid}>
              {shieldelven.map(product => {
                return (
                  <div key={product.id} className={styles.card}>
                    <h3>{ product.title }</h3>
                    <img src={product.image} alt={`Preview of ${product.title}`}/>
                    <p>{ product.description }</p>
                    <p>{ product.price }gp</p>
                    <p>Parry: { product.Parry }</p>
                    <p>Cover: { product.cover }</p>
                    <p>Weight: { product.wt }</p>
                    <p>Strength requirement: { product.strreq }</p>
                  </div>
                );
              })}
            </div>
            
            <h2>Nordic Shields</h2>
            <div className={styles.grid}>
              {shieldnordic.map(product => {
                return (
                  <div key={product.id} className={styles.card}>
                    <h3>{ product.title }</h3>
                    <img src={product.image} alt={`Preview of ${product.title}`}/>
                    <p>{ product.description }</p>
                    <p>{ product.price }gp</p>
                    <p>Parry: { product.Parry }</p>
                    <p>Cover: { product.cover }</p>
                    <p>Weight: { product.wt }</p>
                    <p>Strength requirement: { product.strreq }</p>
                  </div>
                );
              })}
            </div>
            
            <h2>Orcish Shields</h2>
            <div className={styles.grid}>
              {shieldorcish.map(product => {
                return (
                  <div key={product.id} className={styles.card}>
                    <h3>{ product.title }</h3>
                    <img src={product.image} alt={`Preview of ${product.title}`}/>
                    <p>{ product.description }</p>
                    <p>{ product.price }gp</p>
                    <p>Parry: { product.Parry }</p>
                    <p>Cover: { product.cover }</p>
                    <p>Weight: { product.wt }</p>
                    <p>Strength requirement: { product.strreq }</p>
                  </div>
                );
              })}
            </div>
            
          </main>
        </Container>
      </Layout>
    )
  }