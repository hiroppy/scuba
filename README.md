# Scuba

<strong>UI components with a color unity that built by React.</strong>

see: https://abouthiroppy.github.io/scuba/

[![npm version](https://badge.fury.io/js/scuba.svg)](https://badge.fury.io/js/scuba)
[![Build Status](https://travis-ci.org/abouthiroppy/scuba.svg?branch=master)](https://travis-ci.org/abouthiroppy/scuba)
[![Build status](https://ci.appveyor.com/api/projects/status/hrk1vpy5gsxl8r37/branch/master?svg=true)](https://ci.appveyor.com/project/abouthiroppy/scuba/branch/master)
[![codecov](https://codecov.io/gh/abouthiroppy/scuba/branch/master/graph/badge.svg)](https://codecov.io/gh/abouthiroppy/scuba)
[![dependencies Status](https://david-dm.org/abouthiroppy/scuba/status.svg)](https://david-dm.org/abouthiroppy/scuba)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

# Getting Started

[scuba/getting-started](https://abouthiroppy.github.io/scuba/#/getting-started)

Install the module with `npm install --save scuba`.

Scuba has 5 themes and 2 subColors.
Theme and subColor are reflected only in Container.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Container, {Button} from 'scuba';

const Root = () => (
  <Container
    theme="mint"
    subColor="dark"
  >
    <Button>Hello!!</Button>
  </Container>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
```

## Components List
[scuba/components](https://abouthiroppy.github.io/scuba/#/components)

- [x] Typography
- [x] Avatars
- [x] Blockquotes
- [x] Buttons
- [x] Drawers
- [x] Codes
- [x] Forms
- [x] SelectBoxes
- [x] Lists
- [x] Tables
- [x] Papers
- [x] Grids

## Development
```
$ git clone git@github.com:abouthiroppy/scuba.git
$ cd scuba
$ npm install
$ npm run storybook
$ open localhost:8080
```
