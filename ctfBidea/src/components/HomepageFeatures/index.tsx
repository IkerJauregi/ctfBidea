import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Writeups Detallados',
    Svg: require('@site/static/svg/addDocument.svg').default,
    description: (
      <>
        Análisis paso a paso de máquinas vulnerables, retos CTF y labs. Cada writeup incluye comandos, herramientas y explicaciones claras para que aprendas mientras resuelves.
      </>
    ),
  },
  {
    title: 'Aprendizaje Continuo',
    Svg: require('@site/static/svg/codeThinking.svg').default,
    description: (
      <>
        Ideal para aprender hacking ético, pentesting y seguridad ofensiva desde cero. Aprende mientras yo tambien aprendo.
      </>
    ),
  },
  {
    title: 'Organizado y Accesible',
    Svg: require('@site/static/svg/folderFile.svg').default,
    description: (
      <>
        El contenido está estructurado por maquinas y herramientas. Encuentra fácilmente lo que necesitas en cada writeup.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
