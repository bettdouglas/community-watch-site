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
        We have a lot of issues which need to be fixed, and we believe that
        the best way to fix them is to have the community report them.'
        CommunityWatch aims to be a lens through which the government
        can see the issues affecting communities and then priorize what needs to be fixed.
      </>
    ),
  },
  {
    title: 'Giving power to the people',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We believe that by having an open database of issues, we can
        give power to the people. We can give them a voice. We can
        give them a way to tell the government what issues their
        community is facing. We can give them a way to vote on
        issues that affect them. We can give them a way to
        make their communities safer.
      </>
    ),
  },
  {
    title: 'Community-driven governance',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We believe in democracy. Without tranparency on what issues are happening around you
        it's hard to make an informed decision on who to vote for. We believe that the community
        should have a say in what issues are affecting them. We believe that the community should
        be able to vote on issues that affect them. We believe that the community should have a lens
        through which they can see what issues are affecting them, and what issues are being fixed.
      </>
    ),
  },
  {
    title: 'Using the power of data & geo-location',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      We harness geolocation to pinpoint where issues are happening. We use data to
      categorize issues according to the political boundaries they fall under. 
      Having this data allows us to see what issues are happening where, and
      allows the responsible authorities to prioritize what issues need to be fixed.
      </>
    ),
  },
  {
    title: 'Open Data for the Community',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We believe in the power of open data. We believe that the community should have
        access to the data that affects them. Since everyone has a smartphone, pinpointing
        where issues are happening is easy. CommunityWatch aims to be this lens which
        the community can use to see what issues are happening around them.
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
