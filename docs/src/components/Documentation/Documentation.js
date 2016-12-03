import React from 'react';
import ColorsSection from './Colors';
import ContainerSection from './Container';
import TypographySection from './Typography';
import PapersSection from './Papers';
import ButtonsSection from './Buttons';
import TablesSection from './Tables';
import ListsSection from './Lists';
import FormsSection from './Forms';
import styles from './style';

const Documentation = () => (
  <section className={styles.container}>
    <h1 id="documentation">Documentation</h1>
    <hr />
    <ColorsSection />
    <ContainerSection />
    <TypographySection />
    <PapersSection />
    <ButtonsSection />
    <TablesSection />
    <ListsSection />
    <FormsSection />
  </section>
);

export default Documentation;
