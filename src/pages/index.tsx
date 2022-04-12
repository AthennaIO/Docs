import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/installation">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Athenna is a Node.js framework that focus in many types of application development, such as Http servers, workers, CLI's and more!">
      <Head>
          <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)"/>
          <meta name="theme-color" content="#242526" media="(prefers-color-scheme: dark)"/>
          <link rel="icon" href="img/logo.png"/>
          <link rel="manifest" href="manifest.json"/>
          <link rel="apple-touch-icon" href="img/logo.png"/>
          <link rel="mask-icon" href="img/logo.svg"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="msapplication-TileImage" content="img/logo.png"/>
          <meta name="msapplication-TileColor" content="#000"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="#000"/>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
