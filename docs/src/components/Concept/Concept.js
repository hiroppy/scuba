import React from 'react';
import Container, {List, Li, Button} from '../../../../lib';
import styles from './style';
import commonStyles from '../../common';

const ContainerCode1 = () => (
  <pre className={commonStyles.code}>
    <code>
      {
        `import Container from 'Scuba';

const Root = () => (
    <Container>
        <p>Hello :)</p>
    </Container>
);`
        }
    </code>
  </pre>
);

const ContainerCode2 = () => (
  <pre
    className={commonStyles.code}
    style={{width: '50%'}}
  >
    <code>
      {
        `<div>
    <Container
      theme="mint"
      subColor="light"
    >
          <Button>Mint</Button>
          <span>Mint Button</span>
    </Container>
    <Container
        theme="mikan"
        subColor="dark"
    >
          <Button>Mikan</Button>
          <span>Mikan Button</span>
    </Container>
</div>`
        }
    </code>
  </pre>
);

const Concept = () => (
  <section className={styles.container}>
    <h1 id="concepts">Concepts</h1>
    <hr />
    <p>
      <em>Scuba </em>
      is a UI components for React.
      The features of
      <em> Scuba </em>
      is to have theme and sub color.
    </p>
    <br />
    <h2 id="colors">Colors</h2>
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
    <p>The default theme is Sea.</p>
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
    <p>The default subColor is light.</p>
    <h2 id="container">Container</h2>
    <p>You must use Container in the place you want Scuba to apply.</p>
    <ContainerCode1 />
    <p>Props(replace table)</p>
    <h3>capsule</h3>
    <p>The theme is reflected only in Container.</p>
    <div className={styles.capsule}>
      <ContainerCode2 />
      <div className={styles.preview}>
        <Container
          theme="mint"
          subColor="light"
        >
          <Button>Mint</Button>
          <span>Mint Button</span>
        </Container>
        <Container
          theme="mikan"
          subColor="dark"
        >
          <Button>Mikan</Button>
          <span>Mikan Button</span>
        </Container>
      </div>
    </div>
  </section>
);

export default Concept;
