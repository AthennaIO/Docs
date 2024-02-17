import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import Features from '../components/features'
import clsx from 'clsx'

function Header() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.heroGradientTitle}>Athenna</h1>
          <h1 className={styles.heroTitle}>Fast, Expressive, Elegant, For Artisans</h1>
          <p className={styles.heroParagraph}>One foundation for multiple applications</p>
          <div className={styles.actions}>
            <Link
              className={clsx("button button--primary button--lg", styles.action)}
              to="/docs/getting-started/installation">
              Get started
            </Link>
            <Link
              className={clsx("button button--secondary button--lg", styles.action)}
              to="https://github.com/AthennaIO">
              View on GitHub
            </Link>
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.imageContainer}>
            <div className={styles.imageBg}></div>
            <img className={clsx(styles.imageSrc)} src="img/logos/minerva.png" alt="Minerva" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout title={siteConfig.title}>
      <Header />
      <main>
        <Features />
      </main>
    </Layout>
  )
}
