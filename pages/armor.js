import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Layout from '@components/Layout';
import Container from '@components/Container';

import medArmor from '../products/heavy-armor.json'
import heavyArmor from '../products/medium-armor.json'


export default function Home() {
    return (
      <Layout>
        <Container className={styles.homeContainer}>
          <Head>
            <title>Get Your Axe Together - Armor</title>
            <meta name="description" content="Weapons shop in elder scrolls" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>
              Armor
            </h1>
    
            <p className={styles.description}>
              Getting stabbed is only better when you a have a bit of steel on ya!
            </p>
            
            <h2 className={styles.itemcat}>Medium Armor</h2>
            <div className={styles.grid}>
              {medArmor.map(product => {
                return (
                  <div key={product.id} className={styles.card}>
                    <h3>{ product.title }</h3>
                    <img src={product.image} alt={`Preview of ${product.title}`}/>
                    <p>{ product.description }</p>
                    <p>{ product.price }gp</p>
                    <p>Armor: { product.armor }</p>
                    <p>Weight: { product.wt }</p>
                    <p>Strength requirement: { product.strreq }</p>
                    <p>
                      <button className="snipcart-add-item"
                        data-item-id={product.id}
                        data-item-image={product.image}
                        data-item-name={product.title}
                        data-item-url="/armor"
                        data-item-price={product.price}
                      >
                        Add to Cart
                      </button>
                    </p>
                  </div>
                );
              })}
            </div>
    
            <h2 className={styles.itemcat}>Heavy Armor</h2>
            <div className={styles.grid}>
              {heavyArmor.map(product => {
                return (
                  <div key={product.id} className={styles.card}>
                    <h3>{ product.title }</h3>
                    <img src={product.image} alt={`Preview of ${product.title}`}/>
                    <p>{ product.description }</p>
                    <p>{ product.price }gp</p>
                    <p>Armor: { product.armor }</p>
                    <p>Weight: { product.wt }</p>
                    <p>Strength requirement: { product.strreq }</p>
                    <p>
                      <button className="snipcart-add-item"
                        data-item-id={product.id}
                        data-item-image={product.image}
                        data-item-name={product.title}
                        data-item-url="/armor"
                        data-item-price={product.price}
                      >
                        Add to Cart
                      </button>
                    </p>
                  </div>
                );
              })}
            </div>
            
          </main>
        </Container>
      </Layout>
    )
  }