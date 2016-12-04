import React from 'react';
import {Code, List, Li} from '../../../../lib';
import ColorsSection from './Colors';
import ContainerSection from './Container';
import TypographySection from './Typography';
import PapersSection from './Papers';
import ButtonsSection from './Buttons';
import TablesSection from './Tables';
import ListsSection from './Lists';
import FormsSection from './Forms';
import CodesSection from './Codes';
import styles from './style';

const contents = [
  {
    name: 'Colors',
    href: '#colors'
  },
  {
    name: 'Container',
    href: '#container'
  },
  {
    name: 'Typography',
    href: '#typography'
  },
  {
    name: 'Papers',
    href: '#papers'
  },
  {
    name: 'Buttons',
    href: '#buttons'
  },
  {
    name: 'Tables',
    href: '#tables'
  },
  {
    name: 'Lists',
    href: '#lists'
  },
  {
    name: 'Forms',
    href: '#forms'
  },
  {
    name: 'Codes',
    href: '#codes'
  }
];

const Lists = () => (
  <List type="circle">
    {
      contents.map((item) => (
        <Li>
          <a href={item.href}>{item.name}</a>
        </Li>
      ))
    }
  </List>
);

const Documentation = () => (
  <section className={styles.container}>
    <h1 id="documentation">Documentation</h1>
    <hr />
    <h3>Components List</h3>
    <Lists />
    <h3>Customization(common)</h3>
    <p>If you want to change style or class name or others you can specify it like react.</p>
    <Code fileName="Button.js">
      {
        `<Button
    className="customName"
    style={{fontSize: '3rem'}}
    onClick={() => console.log('clicked')}
>
    BUTTON
</Button>
        `
      }
    </Code>

    <ColorsSection />
    <ContainerSection />
    <TypographySection />
    <PapersSection />
    <ButtonsSection />
    <TablesSection />
    <ListsSection />
    <FormsSection />
    <CodesSection />
  </section>
);

export default Documentation;
