import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '📗 About',
    img: require('@site/static/img/layer_example.gif').default,
    description: (
      <>
      AdaCAD is an experimental workspace that applies <a href="/docs/reference/glossary/parametric-design">parametric design</a> to the domain of weave <a href="/docs/reference/glossary/draft">drafting</a>. It supports algorithmic and playful approaches to developing woven structures and cloth, for <a href="docs/reference/glossary/harness-loom">shaft</a>, <a href="/docs/reference/glossary/direct-tie-loom">dobby</a>,  and <a href="/docs/reference/glossary/jacquard-loom">jacquard</a> looms. 
</>
    ),
  },
  {
    title: '🖥️ Use it Online',
    img: require('@site/static/img/sample7b.jpg').default,
    description: (
      <>
  AdaCAD is freely accessible online at <a href="adacad.org">adacad.org</a>, you do not need to download or install it on your computer. We recommend using the Chrome browser on a laptop or desktop computer for the best experience. 
</>
    ),
  },
  {
    title: '🍎 Learn More',
    img: require('@site/static/img/code.png').default,
    description: (
      <>
       New to AdaCAD? Start with our <a href="/docs/learn/getting-started/">getting started instructions</a>, <a href="/docs/category/examples">examples</a>, <a href="/docs/category/templates">templates</a>. Already using AdaCAD? Deepen your practice by exploring all of the project's <a href="/docs/reference/operations/">operations</a> and <a href="/docs/category/glossary">concepts</a>. 
      </>
    ),
  }
  // {
  //   title: '👯‍♀️ Open Source',
  //   img: require('@site/static/img/code.png').default,
  //   description: (
  //     <>
  //      AdaCAD is an open source project! If you'd like to add a feature, start by adding your own operation. 
  //     </>
  //   ),
  // },
  // {
  //   title: '🧪 Experimental',
  //   img: require('@site/static/img/code.png').default,
  //   description: (
  //     <>
  //      AdaCAD is an open source project! If you'd like to add a feature, start by adding your own operation. 
  //     </>
  //   ),
  // },
  // {
  //   title: '🧪 Experimental',
  //   img: require('@site/static/img/code.png').default,
  //   description: (
  //     <>
  //      AdaCAD is an open source project! If you'd like to add a feature, start by adding your own operation. 
  //     </>
  //   ),
  // },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--left">
        {/* <img src={img}></img> */}
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--left padding-horiz--md">
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
