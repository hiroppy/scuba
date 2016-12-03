import React from 'react';
import styles from './style';
import Container, {List, Li, Button, Paper} from '../../../../lib';
import generateCodeTemplate from './generateCodeTemplate';
import generateTableTemplate from './generateTableTemplate';

const sampleCode1 = `import Container from 'Scuba';

const Root = () => (
    <Container>
        <p>Hello :)</p>
    </Container>
);`;

const sampleCode2 = `<div>
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
</div>`;

const ContainerSection = () => (
  <div>
    <h2 id="container">Container</h2>
    <p>You must use Container component in the place you want Scuba to apply.</p>
    {generateTableTemplate([
      {
        name: 'theme',
        type: '(sea | deepSea | sunset | mint | mikan) or hex',
        default: 'sea'
      },
      {
        name: 'subColor',
        type: '(light | dark) or hex',
        default: 'light'
      }
    ])}
    {generateCodeTemplate(sampleCode1)}
    <h3>capsule</h3>
    <p>The theme is reflected only in Container.</p>
    <div className={styles.capsule}>
      {generateCodeTemplate(sampleCode2)}
      <Paper className={styles.preview}>
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
      </Paper>
    </div>
  </div>
);

export default ContainerSection;
