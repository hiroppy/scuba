import React from 'react';
import {
  Route,
  Router,
  IndexRoute,
  useRouterHistory
} from 'react-router';
import { createHashHistory } from 'history';

import Container from '../../src';

import Layout from './components/Layout';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import GettingStarted from './components/GettingStarted';
import Components, {
  CodesSection,
  FormsSection,
  GridsSection,
  ListsSection,
  ColorsSection,
  PapersSection,
  TablesSection,
  DrawersSection,
  AvatarsSection,
  ButtonsSection,
  ContainerSection,
  TypographySection,
  SelectBoxesSection
} from './components/Components';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const createComponents = (componentName, isSidebar) => {
  return {
    main   : componentName,
    sidebar: isSidebar ? Sidebar : undefined
  };
};

const PageRouter = () => (
  <Router
    history={appHistory}
    onUpdate={() => window.scrollTo(0, 0)}
  >
    <Route
      path="/"
      component={Layout}
    >
      <IndexRoute component={createComponents(Hero, false)} />
      <Route
        path="getting-started"
        component={createComponents(GettingStarted, true)}
      />
      <Route
        path="concept"
        component={createComponents(Concept, true)}
      />
      <Route path="components">
        <IndexRoute component={createComponents(Components, true)} />
        <Route
          path="colors"
          component={createComponents(ColorsSection, true)}
        />
        <Route
          path="container"
          component={createComponents(ContainerSection, true)}
        />
        <Route
          path="typography"
          component={createComponents(TypographySection, true)}
        />
        <Route
          path="grids"
          component={createComponents(GridsSection, true)}
        />
        <Route
          path="papers"
          component={createComponents(PapersSection, true)}
        />
        <Route
          path="avatars"
          component={createComponents(AvatarsSection, true)}
        />
        <Route
          path="buttons"
          component={createComponents(ButtonsSection, true)}
        />
        <Route
          path="tables"
          component={createComponents(TablesSection, true)}
        />
        <Route
          path="drawers"
          component={createComponents(DrawersSection, true)}
        />
        <Route
          path="lists"
          component={createComponents(ListsSection, true)}
        />
        <Route
          path="forms"
          component={createComponents(FormsSection, true)}
        />
        <Route
          path="select-boxes"
          component={createComponents(SelectBoxesSection, true)}
        />
        <Route
          path="codes"
          component={createComponents(CodesSection, true)}
        />
      </Route>
      <Route
        path="*"
        component={createComponents(Hero, false)}
      />
    </Route>
  </Router>
);

export default PageRouter;
