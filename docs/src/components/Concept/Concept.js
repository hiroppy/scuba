import React from 'react';
import styles from './style';
import commonStyles from '../../common';
import {H1, H2, List, Li} from '../../../../lib';

const ContainerCode = () => (
  <pre className={commonStyles.code}>
    <code>
      {
        `import Container from 'Scuba';

const Root = () => (
  <Container>
  </Container>
);`
        }
    </code>
  </pre>
);

const Concept = () => (
  <section className={styles.container}>
    <H1 id="concepts">Concepts</H1>
    <p>
      <em>Scuba </em>
      is a UI components for React.
      The features of
      <em> Scuba </em>
      is to have theme and sub color.
    </p>
    <br />
    <H2 id="colors">Colors</H2>
    <p>
      <em>Scuba </em>
      provides Sea, DeepSea, Sunset, Mint and Mikan as themes.
    </p>
    <List type="circle">
      <Li><span style={{color: '#3498db'}}>Sea: #3498db</span></Li>
      <Li><span style={{color: '#145d8e'}}>DeepSea: #145d8e</span></Li>
      <Li><span style={{color: '#e14d4c'}}>Sunset: #e14d4c</span></Li>
      <Li><span style={{color: '#2be8ce'}}>Mint: #2be8ce</span></Li>
      <Li><span style={{color: '#db9634'}}>Mikan: #db9634</span></Li>
    </List>
    <p>
      <em>Scuba </em>
      provides Light and Dark as sub colors.
    </p>
    <List type="square">
      <Li>
        <span style={{
          color: '#f5f5f5',
          background: '#363636'
        }}>
          Light: #f5f5f5
        </span>
      </Li>
      <Li>
        <span style={{
          color: '#363636',
          background: '#f5f5f5'
        }}>
          Dark: #363636
        </span>
      </Li>
    </List>
    <H2 id="container">Container</H2>
    <p>You must use Container in the place you want Scuba to apply.</p>
    <ContainerCode />
    <p>Props(replace table)</p>
  </section>
);

export default Concept;
