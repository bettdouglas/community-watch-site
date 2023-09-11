import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built for the Community',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Community Watch is a community-driven project. We are a group of
        volunteers who are passionate about making our communities safer.
        Join community-watch by downloading the app, reporting issues, and
        voting on issues that affect you.
      </>
    ),
  },
  {
    title: 'Giving power to the people',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We believe that by having a central place where people report their issues, 
        we can have a lens through which the government can see the issues affecting
        communities and priorize what needs to be fixed.
      </>
    ),
  },
  {
    title: 'Community-driven governance',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We believe that the community should have a say in how their leaders
        govern their communities. That's why we vote for our leaders. But after voting, there's currently 
        no way for them to know what issues their region is facing. We hope to change that.
      </>
    ),
  },
  {
    title: 'Using the power of data & geo-location',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Through geo-location, we can categorize issues by the region they were reported in,
      then show the government what issues the people of a specific region are facing.
      The community is also able to vote on issues that affect them, so that the government
      can prioritize what needs to be fixed.
      </>
    ),
  },
  {
    title: 'Open Data for the Community',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We believe in the power of open data. We believe that the community should have
        access to the data that affects them. That's why we have plans to make all our data open and
        accessible to anyone. 
        <br></br>We also plan to make our code open source so that anyone can
        contribute to the project
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" />
         */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
