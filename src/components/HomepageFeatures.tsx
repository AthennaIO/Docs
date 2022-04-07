import clsx from 'clsx';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Why Athenna ?',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
          <b>Athenna</b> is a <b>Node.js framework</b> that focus in many types of application development, such as <b>Http servers</b>,
          <b> workers</b>, <b>CLI's</b> and more! <b>Athenna</b> lets you focus in the development of your business rules, no more
          configuring project. Just scaffold the project with our <code>athenna new</code> and
          everything is working! With <b>Athenna</b> you can build more than a simple Http server, here your can
          build workers, CLI's, and in the future, GRPc and GraphQL applications! What are you waiting for?
          hit <b>Get Started</b> button and go check the documentation!
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          alt={title}
          src={useBaseUrl(image)}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p style={{ fontSize: 18 }}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row--align-center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
