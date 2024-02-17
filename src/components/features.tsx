import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link'
import styles from './features.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fast',
    icon: '🚀',
    description: (
      <>
        HTTP server application built on top of Fastify, Athenna can be really fast.
      </>
    ),
  },
  {
    title: 'ESM only',
    icon: '✅',
    description: (
      <>
        Athenna leverages modern JavaScript primitives, including ES modules, Node.js sub-path imports, and much more.
      </>
    ),
  },
  {
    title: 'Batteries Included',
    icon: '🔋',
    description: (
      <>
        Athenna has a lot of built in components and helpers. Batteries included.
      </>
    ),
  },
  {
    title: 'Delightful DX',
    icon: '😃',
    description: (
      <>
        We’ve already laid the foundation, freeing you to create without sweating the small things.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="card card--full-height padding--md">
        <div className="card__header">
          <div className={styles.icon}>{icon}</div>
          <h3>{title}</h3>
        </div>
        <div className="card__body">{description}</div>
      </div>
    </div>
  );
}

export default function Features(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
      <div className="container" style={{ marginTop: "20rem" }}>
        <div className="row">
          <div className="col col--6 flex justify-center align-center">
              <div>
                <h1 className="hero__title">Enjoy writing code 🤩</h1>
                <p className="hero__subtitle">
                  Athenna values beauty. We love clean code just as much as you do. Simple, elegant syntax puts 
                  amazing functionality at your fingertips. Every feature has been thoughtfully considered to 
                  provide a wonderful developer experience.
                </p>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/getting-started/installation">
                  Start Learning
                </Link>
              </div>
          </div>
          <div className="col col--6 flex justify-center align-center">
            <div>
              <img style={{ borderRadius: '10px' }} src="img/codes/http-route.png" width={580} height={330} />
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "20rem" }}>
        <div className="row">
          <div className="col col--6 flex justify-center align-center">
            <div>
              <img style={{ borderRadius: '10px' }} src="img/codes/ignite.png" width={580} height={330} />
            </div>
          </div>
          <div className="col col--6 flex justify-center align-center">
              <div>
                <h1 className="hero__title">Reliable foundation 💪</h1>
                <p className="hero__subtitle">
                  With a reliable foundation, Athenna is perfect for working with 
                  microservices architecture, running multiple types of different
                  applications as needed.
                </p>
                <div>
                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/getting-started/installation">
                    Get Started
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div> 
      <div className="container" style={{ marginTop: "20rem", marginBottom: "20rem"  }}>
        <div className="row">
          <div className="col col--6 flex justify-center align-center">
              <div>
                <h1 className="hero__title">Move fast & with confidence 🏃‍♀️</h1>
                <p className="hero__subtitle">
                  Athenna is committed to delivering the best testing experience you can imagine. 
                  No more brittle tests that are a nightmare to maintain. Beautiful testing APIs and 
                  database seeding let you ship with confidence.
                </p>
                <div>
                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/getting-started/installation">
                    Start Learning
                  </Link>
                </div>
              </div>
          </div>
          <div className="col col--6 flex justify-center align-center">
            <div>
              <img style={{ borderRadius: '10px' }} src="img/codes/test-route.png" width={580} height={330} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
